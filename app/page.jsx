import Feed from "@components/Feed";


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover Graphs
        <br className="max-md:hidden"></br>
        <span className="orange_gradient text-center">
          Powered by Next.ID
        </span>
      </h1>
      <p className="desc text-center">The dashboard project incorporates modern design principles
         to create a visually stunning and user-friendly interface. 
         With a clean and intuitive layout, visitors can effortlessly 
         navigate through different sections of the dashboard and 
         access the desired information.
      </p>

      <Feed />
    </section>
  )
}

export default Home