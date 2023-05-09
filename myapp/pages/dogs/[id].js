import { getDog } from "@/utils/actions";
import Link from "next/link";
import { useRouter } from "next/router";

export default function  show({dog}) {
    const router =  useRouter();

    const deleteDog = async () => {
        // make delete request to api

        await fetch("/api/dogs/" + dog._id, {
            method: 'delete',
        });

        // push the user back to the index page
        router.push('/');
    }


    return (
    <div style={{ textAlign: "center" }}>
      <h1>{dog.name}</h1>
      <h2>AGE: {dog.age}</h2>
      <h3>{dog.breed}</h3>
      <img
        src={dog.image}
        alt={dog.name}
        style={{
          height: "200px",
          width: "200px",
          objectFit: "cover",
          cursor: "pointer",
        }}
      />
      <div>
        <Link href={`/dogs/edit/${dog._id}`}>
          <button>Edit Dog</button>
        </Link>
        <button onClick={deleteDog}>Delete Dog</button>
      </div>
    </div>
    )
}



export async function getServerSideProps(ctx) {
    const id = ctx.query.id;

    const dog  = JSON.parse(JSON.stringify(await getDog(id)));
    return { 
        props: {
            title: "Dogs app - Show Page",
            description: "Show page for a dog",
            dog,

        },
    }
}