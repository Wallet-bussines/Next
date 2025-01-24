import { PayBlock } from "@/components/Pay"
import Navbar from "@/components/Navbar/Navbar"

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-y-3 pb-20">
        <PayBlock />
      </main>
      <Navbar />
    </>
  )
}
