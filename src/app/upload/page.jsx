export default function UploadPage() {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Upload Video</h1>
        <div className="bg-gray-100 p-6 rounded-lg">
          <div className="border-2 border-dashed border-gray-300 p-12 text-center rounded-lg">
            <p className="text-gray-500">
              Drag and drop a video file
            </p>
          </div>
          <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            Select File
          </button>
        </div>
      </div>
    );
  }
  
  export default function UploadPage() {
    return (
      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Upload Video</h1>
  
        <div className="h-[360px] border-dashed border-2 border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4">
            <span className="text-xl font-bold">+</span>
          </div>
          <h3 className="text-sm font-semibold mb-2">Select video to upload</h3>
          <p className="text-xs text-gray-500 mb-2">Or drag and drop a file</p>
          <p className="text-xs text-gray-400 mb-2">MP4 or WebM | 720p resolution or higher</p>
          <p className="text-xs text-gray-400 mb-2">Less than 2 GB</p>
          <p className="text-xs text-red-500 text-center w-full py-2 px-8 rounded-md bg-red-100">Incorrect file format</p>
          <button className="mt-4 px-4 py-2 border rounded-md">Select File</button>
        </div>
  
        <div className="flex flex-col mt-6">
          <label className="block text-sm font-medium mb-2">Caption</label>
          <input 
            type="text" 
            className="w-full p-2 border rounded-md" 
            placeholder="Add a caption..."
          />
        </div>
  
        <div className="mt-4">
          <label className="block text-sm font-medium mb-2">Cover</label>
          <div className="w-20 h-20 bg-gray-200 rounded-md"></div>
        </div>
  
        <div className="mt-6">
          <label className="block text-sm font-medium mb-2">Who can view this video</label>
          <select className="w-full p-2 border rounded-md">
            <option>Public</option>
            <option>Friends</option>
            <option>Private</option>
          </select>
        </div>
  
        <div className="mt-4">
          <label className="block text-sm font-medium mb-2">Allow users to:</label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="comments" className="mr-2"/>
              <label htmlFor="comments">Comment</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="duet" className="mr-2"/>
              <label htmlFor="duet">Duet</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="stitch" className="mr-2"/>
              <label htmlFor="stitch">Stitch</label>
            </div>
          </div>
        </div>
  
        <div className="flex space-x-3 mt-6">
          <button className="px-6 py-2 border rounded-md">Discard</button>
          <button className="px-6 py-2 bg-red-500 text-white rounded-md">Post</button>
        </div>
      </div>
    );
  }
  