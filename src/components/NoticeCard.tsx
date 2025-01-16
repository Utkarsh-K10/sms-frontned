"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const AllNotice = () => {
    const [noticedata, setNoticedata] = React.useState<{ statusCode: number; data :{ _id: string; noticeName: string; noticeDescription: string; noticeImage: string; }[] } | undefined>(undefined);
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
        { noticedata && noticedata.data &&  
            <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items ={noticedata.data} />
        </div>
        }
        </>
    );
    
}

export default AllNotice;