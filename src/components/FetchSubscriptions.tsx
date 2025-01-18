import { Mail, Inbox } from 'lucide-react';

interface Props {
  getSubscriptions: () => void;
}

export function FetchSubscriptions({ getSubscriptions }: Props) {
  return (
    <div className="text-center py-12">
      <div className="relative inline-block mb-4">
        <Mail className="w-16 h-16 text-blue-500 mx-auto" />
        <Inbox className="w-8 h-8 text-green-500 absolute -bottom-2 -right-2" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Gmail Connected Successfully!
      </h2>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        We're ready to analyze your Gmail inbox for subscription invoices. This process is secure and we only look for subscription related emails using AI.
      </p>
      <button
        onClick={getSubscriptions}
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Fetch My Subscriptions
      </button>
    </div>
  );
}