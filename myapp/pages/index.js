
import styles from '@/styles/Home.module.css'
import { getDogs } from '@/utils/actions';
import Link from "next/link"



export default function Home({dogs}) {
  return (
    <div>
    <Link href='/dogs/new'>
      <button>Add New Dog</button>
    </Link>
      {dogs.map(({ _id, name, age, breed, image }) => (
        <div key={_id} style={{ textAlign: "center" }}>
          <h1>
            {name}-{age}
          </h1>

          <h3>{breed}</h3>
          <Link href={`/dogs/${_id}`}>
            <img
              src={image}
              alt={name}
              style={{
                height: "300px",
                width: "300px",
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
          </Link>
        </div>
      ))}
    </div>
    
    
  )
}

// This page will eventually display the most up to date list of our dogs, so it should be server-side rendered. To designate that we will page is serversideprops!
export async function getServerSideProps(ctx) {
  const dogs = JSON.parse(JSON.stringify(await getDogs()));
  // This function should return an object with a props property with all the props we want for this page
  // keep in mind this function is run server-side
  return {
    props: {
      title: "Dogs App - Main Page",
      description: "This page will show us all our dogs",
      dogs,
    },
  };
}

