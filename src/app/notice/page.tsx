"use client";
import React from 'react'
const Page = () => {
    const [noticedata, setNoticedata] = React.useState<{ statusCode: number; data: { _id:string; noticeName: string; noticeImage: string; }[] } | undefined>(undefined);

    const fetchNotices = async () => {
        const allnotice = await fetch("https://school-api-beta.vercel.app/api/v1/user/notice");
        const data = await allnotice.json();
        setNoticedata(data);
    };

    React.useEffect(() => {
        fetchNotices();
    }, []);

    return (
        <>
            {noticedata?.data && noticedata.data.map((notice) => (
                <div key={notice._id} className="grid grid-cols-1 h-[20rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
                    <p className="dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold">
                        {notice.noticeName}
                    </p>
                    <img src={notice.noticeImage} alt={notice.noticeName}/>
                    <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
                </div>
            ))}
        </>
    );
};

export default Page;