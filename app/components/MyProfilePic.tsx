import Image from "next/image"

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto pt-6">
        <Image className="border-4 border-black dark:border-sky-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
            src="/images/monkerejectnft.png" width={200} height={200} alt="adlonymous" priority={true}/>
    </section>
  )
}
