<div className="min-h-screen flex items-center justify-center">
<div className="bg-white p-8 rounded shadow-md w-80">
  <form>
    <div className="mb-4">
      <label for="name" className="block text-sm font-medium text-gray-700">Name</label>
      <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" />
    </div>
    <div className="mb-4">
      <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
      <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" />
    </div>
    <div className="mb-4">
      <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
      <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md" />
    </div>
    <div className="mb-6">
      <label for="password_confirmation" className="block text-sm font-medium text-gray-700">Confirm Password</label>
      <input type="password" id="password_confirmation" name="password_confirmation" className="mt-1 p-2 w-full border rounded-md" />
    </div>
    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Register</button>
  </form>
</div>
</div>