import { Header } from "~/app/layout/header/header";
import { Footer } from "~/app/layout/footer/footer";

export function Main(){
  return (
    <div>
      <Header />
      {/*Header*/}
      <section className="container mx-auto shadow h-full">
       Website dau tien cua toi
      </section>
      {/*Footer*/}
      <Footer/>
    </div>
  )
}
