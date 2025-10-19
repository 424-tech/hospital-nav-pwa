import type { Announcement } from "@shared/schema";

interface NoticeBoardProps {
  announcements: Announcement[];
}

export default function NoticeBoard({ announcements }: NoticeBoardProps) {
  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <h2 className="text-[28px] font-semibold">Announcements</h2>
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div 
            key={announcement.id} 
            className="bg-[#E3F2FD] rounded-xl p-4 shadow-sm hover:-translate-y-0.5 transition-transform duration-300" 
            data-testid={`announcement-${announcement.id}`}
          >
            <div className="font-semibold text-base">{announcement.title}</div>
            <div className="text-sm mt-2 text-gray-700">{announcement.message}</div>
            <div className="text-xs text-gray-500 mt-3">{announcement.timestamp}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
