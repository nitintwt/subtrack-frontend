import { Loader2 } from 'lucide-react'

function Processing() {
  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
    <div className="text-center">
      <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto" />
      <h2 className="mt-4 text-xl font-semibold text-blue-800">Processing</h2>
      <p className="mt-2 text-blue-600">Please wait while we complete your request...</p>
    </div>
    </div>
  </div>
    
  )
}

export default Processing
