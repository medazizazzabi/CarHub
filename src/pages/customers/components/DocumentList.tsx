import { Document } from '../types';
import { FileText, Download } from 'lucide-react';

interface DocumentListProps {
  documents: Document[];
}

export default function DocumentList({ documents }: DocumentListProps) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-medium text-gray-900">Documents</h3>
      <ul className="mt-2 divide-y divide-gray-200">
        {documents.map((doc) => (
          <li key={doc.id} className="py-3 flex justify-between items-center">
            <div className="flex items-center">
              <FileText className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {doc.type.replace('_', ' ').toUpperCase()}
                </p>
                <p className="text-sm text-gray-500">
                  Uploaded on {new Date(doc.uploadedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <button
              type="button"
              className="ml-4 flex items-center text-sm text-indigo-600 hover:text-indigo-900"
            >
              <Download className="h-4 w-4 mr-1" />
              Download
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}