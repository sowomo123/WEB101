export default function UploadPage() {
  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Upload video</h1>

      <div className="flex">
        <div className="w-[360px] border-dashed border-2 border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center">
          <h3 className="text-xl font-semibold mb-2">Select video to upload</h3>
          <p className="text-gray-500 mb-1">Or drag and drop a file</p>
          <p className="text-gray-400 mb-1">MP4 or WebM</p>
          <p className="text-gray-400 mb-1">720x1280 resolution or higher</p>
          <p className="text-gray-400 mb-1">Up to 10 minutes</p>
          <p className="text-gray-400 mb-2">Less than 2 GB</p>
          <button className="text-white bg-red-500 px-8 py-2 rounded-md">
            Select file
          </button>
        </div>

        <div className="flex-1 ml-6">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Caption</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="Add a caption..."
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Cover</label>
            <div className="h-20 bg-gray-200 rounded-md"></div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Who can view this video
            </label>
            <select className="w-full p-2 border rounded-md">
              <option>Public</option>
              <option>Friends</option>
              <option>Private</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Allow users to:</label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="comments" className="mr-2" />
                <label htmlFor="comments">Comment</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="duet" className="mr-2" />
                <label htmlFor="duet">Duet</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="stitch" className="mr-2" />
                <label htmlFor="stitch">Stitch</label>
              </div>
            </div>
          </div>

          <div className="flex space-x-3 mt-6">
            <button className="px-6 py-2 border rounded-md">Discard</button>
            <button className="px-6 py-2 bg-red-500 text-white rounded-md">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}