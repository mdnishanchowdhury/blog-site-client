import { resolve } from 'path'
import React from 'react'

export default async function ABoutPage() {

    await new Promise((resolve) => setTimeout(resolve, 4000));

    return (
        <div>
            <h1>this is about page</h1>
        </div>
    )
}
