import Head from 'next/head'
import Image from 'next/image'

export default function ants() {
    let test=[1,4,3,2,5]
    
    
    return (
    
        <main>
            {test.map((n)=>(
                <h1>{n}</h1>
              ))}
        </main>
    
    
    
    )
}