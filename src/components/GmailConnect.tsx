import { Mail, Shield, Eye } from 'lucide-react';
import { Button , Link as Nlink } from '@nextui-org/react';


export function GmailConnect() {
  return (
    <div className="text-center py-12">
      <Mail className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Connect Your Gmail Account
      </h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Connect your Gmail account to automatically detect and track your subscription invoices.
      </p>
      
      <div className="flex justify-center space-x-8 mb-8">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
            <Shield className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-medium text-gray-900 mb-1">Secure Access</h3>
          <p className="text-sm text-gray-500">Your data is encrypted and secure</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
            <Eye className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-medium text-gray-900 mb-1">Read-Only Access</h3>
          <p className="text-sm text-gray-500">We only read invoice emails</p>
        </div>
      </div>

      <Button
        as={Nlink} href={`https://7sm1tffz44.execute-api.ap-south-1.amazonaws.com/timeslot/subtrack/api/v1/user/googleOAuth`}
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Connect Gmail
      </Button>
    </div>
  )
}