import FormBuilder from "../../components/FormBuilder";

export default function FormsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Form Builder</h1>
        </div>
      </div>
      <FormBuilder />
    </div>
  );
}
