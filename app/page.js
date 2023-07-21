import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 text-black">
       <div className=" flex flex-col justify-center items-center">
      <Image
        src="/huawei-cloud.png"
        alt="Huawei Cloud Logo"
        className="mb-8 mt-[100px]"
        width={500}
        height= {100}
      />
      <div className="text-center">

        <h1 className="text-4xl font-bold mb-4 text-black">Welcome to Huawei Cloud Next.js Demo App</h1>
        <p className="text-lg">
          Huawei Cloud is a leading cloud service provider that offers a wide range of
          cloud computing services, including computing, storage, databases, and more.
        </p>
        <p className="text-lg mt-4">
          With Huawei Cloud, you can build and deploy applications with ease and
          take advantage of cutting-edge technologies.
        </p>
      </div>
    </div>
      
    </main>
  )
}
