'use client';
import VideoCard from 'src/components/ui/videocard.jsx';

// Sample data for our feed
const DUMMY_POSTS = [
 {
   id: '1',
   username: '@user1',
   caption: 'Check out this cool video! #trending #tiktok #viral',
   audio: 'Original Sound - User1',
   likes: 1234,
   comments: 432,
   shares: 89
 },
 {
   id: '2',
   username: '@user2',
   caption: 'Learning to dance 💃 #dance #fun #trending',
   audio: 'Popular Song - Artist',
   likes: 5678,
   comments: 321,
   shares: 52
 },
 {
   id: '3',
   username: '@user3',
   caption: 'Beautiful sunset today! #nature #sunset #vibes',
   audio: 'Sunset Vibes - Chill Music',
   likes: 2468,
   comments: 135,
   shares: 46
 }
];

export default function VideoFeed() {
 return (
   <div className="max-w-[550px] mx-auto">
     {DUMMY_POSTS.map((post) => (
       <VideoCard key={post.id} post={post} />
     ))}
   </div>
 );
}