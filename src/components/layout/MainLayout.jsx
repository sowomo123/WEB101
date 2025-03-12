import Link from 'next/link';

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="flex items-center justify-between h-16 px-4">
          <Link href="/" className="text-xl font-bold">
            TikTok
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-red-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-red-500">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/upload" className="hover:text-red-500">
                  Upload
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}
'use client';
import Link from 'next/link';
import { 
  FaHome, FaUserFriends, FaCompass, FaVideo, 
  FaInbox, FaRegUser, FaPlus 
} from 'react-icons/fa';

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-60 border-r fixed h-full overflow-y-auto">
        <div className="p-4">
          <Link href="/" className="text-xl font-bold flex items-center">
            <span className="text-red-500 mr-1">TikTok</span>
          </Link>
        </div>

        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <Link href="/" className="flex items-center p-3 hover:bg-gray-100 rounded-lg">
                <FaHome className="text-xl mr-3" />
                <span>For You</span>
              </Link>
            </li>
            <li>
              <Link href="/following" className="flex items-center p-3 hover:bg-gray-100 rounded-lg">
                <FaUserFriends className="text-xl mr-3" />
                <span>Following</span>
              </Link>
            </li>
            <li>
              <Link href="/explore" className="flex items-center p-3 hover:bg-gray-100 rounded-lg">
                <FaCompass className="text-xl mr-3" />
                <span>Explore</span>
              </Link>
            </li>
            <li>
              <Link href="/live" className="flex items-center p-3 hover:bg-gray-100 rounded-lg">
                <FaVideo className="text-xl mr-3" />
                <span>LIVE</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="border-t mt-4 pt-4 px-2">
          <p className="text-gray-500 text-sm px-3 mb-2">Suggested accounts</p>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-center p-2 hover:bg-gray-100 rounded-md">
              <div className="h-8 w-8 rounded-full bg-gray-300 mr-2"></div>
              <div>
                <p className="text-sm font-semibold">user_{index + 1}</p>
                <p className="text-xs text-gray-500">User {index + 1}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="px-3 py-4 mt-2">
          <p className="text-sm text-gray-500 mb-4">
            Log in to follow creators, like videos, and view comments.
          </p>
          <button className="w-full py-2 px-4 border rounded-md font-medium mb-2 hover:bg-gray-100">
            Login
          </button>
        </div>

        <div className="border-t px-3 py-4 text-xs text-gray-500">
          <p className="mb-2">© 2025 TikTok</p>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 ml-60">
        <div className="max-w-[1150px] mx-auto">
          {/* Top header with search */}
          <header className="h-16 border-b flex items-center justify-between px-4">
            <div className="w-1/3">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search accounts and videos" 
                  className="w-full bg-gray-100 py-2 pl-10 pr-4 rounded-full"
                />
                <FaCompass className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div className="w-1/3 flex justify-end space-x-4">
              <Link href="/upload">
                <button className="border px-3 py-1 rounded-md hover:bg-gray-50 flex items-center">
                  <FaPlus className="mr-2" /> Upload
                </button>
              </Link>
              
              <button className="bg-red-500 text-white px-6 py-1 rounded-md hover:bg-red-600">
                Log in
              </button>
            </div>
            <div>
              <Link href="/profile" className="flex items-center p-3 hover:bg-gray-100 rounded-md mx-2">
                <FaRegUser className="text-xl mr-3" />
                <span>Profile</span>
              </Link>
            </div>
          </header>

          {/* Main content */}
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
