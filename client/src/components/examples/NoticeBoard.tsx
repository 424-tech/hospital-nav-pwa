import NoticeBoard from "../NoticeBoard";
import { announcements } from "@/lib/hospitalData";

export default function NoticeBoardExample() {
  return (
    <div className="p-4">
      <NoticeBoard announcements={announcements} />
    </div>
  );
}
