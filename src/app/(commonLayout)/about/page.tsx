"use client";

import { getBlogs } from '@/actions/blog.action';
import React, { useEffect, useState } from 'react'

export default function AboutPage() {

    const [data, setData] = useState(null);
    const [error, setError] = useState<{ message: string | null } | null>(null);

    useEffect(() => {
        (async () => {
            const { data, error } = await getBlogs();
            setData(data);
            setError(error);
        })();
    }, []);

    console.log(error);

    return (
        <div>
            <h1>this is about page</h1>
        </div>
    )
}

// await new Promise((resolve) => setTimeout(resolve, 4000));