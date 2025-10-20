"use client";
import { useState } from "react";

interface FormElement {
  id: string;
  type: "text" | "email" | "phone" | "dropdown" | "checkbox";
  label: string;
  required: boolean;
}

export default function FormBuilder() {
  const [elements, setElements] = useState<FormElement[]>([]);
  const [formName, setFormName] = useState("My Form");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const addElement = (type: FormElement["type"]) => {
    const newElement: FormElement = {
      id: Date.now().toString(),
      type,
      label: `${type.charAt(0).toUpperCase() + type.slice(1)} Field`,
      required: false,
    };
    setElements([...elements, newElement]);
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formName, elements }),
      });

      if (!res.ok) throw new Error("Failed to save form");

      const data = await res.json();
      setMessage(`✅ Form saved successfully! (ID: ${data.id})`);
      setElements([]); // optional: clear builder after save
    } catch (error: any) {
      console.error(error);
      setMessage("❌ Failed to save form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-4">Form Elements</h3>
          {(["text", "email", "phone", "dropdown", "checkbox"] as const).map(
            (type) => (
              <button
                key={type}
                onClick={() => addElement(type)}
                className="w-full p-3 mb-2 text-left bg-gray-50 rounded border hover:bg-gray-100"
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            )
          )}
        </div>

        {/* Form Preview */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <input
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
            className="text-2xl font-bold mb-6 w-full border-b p-2 focus:outline-none"
          />

          <div className="space-y-4">
            {elements.map((element) => (
              <div key={element.id} className="border rounded-lg p-4">
                <label className="block text-sm font-medium mb-2">
                  {element.label} {element.required && "*"}
                </label>
                {element.type === "text" && (
                  <input type="text" className="w-full p-2 border rounded" />
                )}
                {element.type === "email" && (
                  <input type="email" className="w-full p-2 border rounded" />
                )}
                {element.type === "phone" && (
                  <input type="tel" className="w-full p-2 border rounded" />
                )}
                {element.type === "dropdown" && (
                  <select className="w-full p-2 border rounded">
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                )}
                {element.type === "checkbox" && (
                  <input type="checkbox" className="mr-2" />
                )}
              </div>
            ))}
          </div>

          {elements.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              Add elements from the sidebar to build your form
            </div>
          )}

          <button
            onClick={handleSave}
            disabled={loading}
            className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Form"}
          </button>

          {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
        </div>
      </div>
    </div>
  );
}
