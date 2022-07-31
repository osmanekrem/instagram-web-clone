import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div className='max-w-[470px] lg:max-w-[821px] mx-auto pt-[30px]'>
        <Helmet>
            <title>Instagram</title>
        </Helmet>
        Home
    </div>
  )
}
