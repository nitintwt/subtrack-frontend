import { Loader2 } from 'lucide-react'

function Processing() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 flex items-center space-x-3">
      <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
      <span className="text-gray-900 font-medium">
      Fetching subscriptions...
      </span>
    </div>
  </div>
  )
}

export default Processing
