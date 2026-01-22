import { Navbar1 } from '@/components/layout/navbar1'
import Link from 'next/link'
import React from 'react'

export default function PracticeLayout(
    {
        children,
        marketingSlot,
        salesSlot
    }:
        {
            children: React.ReactNode
            marketingSlot: React.ReactNode
            salesSlot: React.ReactNode
        }) {
    return (
        <div>
            <div>
                <nav className='flex gap-10 m-8'>
                    <Link className='hover:underline' href="development">development</Link>
                    <Link className='hover:underline' href="marketing">marketing</Link>
                    <Link className='hover:underline' href="sales">sales</Link>
                    <Link className='hover:underline' href="testing">testing</Link>
                </nav>
            </div>

            <div className='flex'>
                {marketingSlot}
                {salesSlot}
            </div>

            {children}
        </div>
    )
}
