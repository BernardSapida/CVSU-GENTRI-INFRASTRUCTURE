import Head from "next/head";
import type { GetServerSideProps } from "next";
import axios from "axios";

type Categories = {
  categories: Record<string, any>[];
};

export const getServerSideProps: GetServerSideProps<Categories> = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_SERVER_URL}/api/v1/categories`
    );

    return {
      props: { categories: response.data },
    };
  } catch (e) {
    console.error(e);

    return {
      props: { categories: [] },
    };
  }
};

export default function Home({ categories }: { categories: any }) {
  console.log(categories);
  return (
    <div className="h-100">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eius sed
        voluptatem dicta expedita soluta quidem iste deserunt. Quaerat, itaque.
        Optio eveniet, eaque quia tenetur nemo, aspernatur, amet dolores totam
        reiciendis sed repudiandae. Dolore odio unde aspernatur totam voluptatum
        delectus dolorum tempora, quidem repellendus quis animi a voluptatem
        sapiente aliquam ab impedit ullam fugiat cupiditate quasi? Laboriosam
        aliquid obcaecati enim ab maiores modi molestias dolorum eum hic atque
        accusamus, animi ad similique officia, facere dignissimos quod esse
        suscipit tempora impedit vitae nulla? Numquam, rerum quo exercitationem
        recusandae, ad, cumque quam itaque temporibus voluptate officia tempora
        corporis. Exercitationem iste itaque, deleniti ad obcaecati tenetur
        quibusdam sint, cupiditate quisquam maxime, eum blanditiis officiis non
        tempore ipsum quidem expedita voluptatibus porro. Voluptate, assumenda
        quibusdam error expedita eveniet inventore quidem, minima tenetur
        architecto reiciendis nostrum labore, sint doloribus nulla delectus
        atque. Ad voluptatum officiis repellendus saepe, rem dolorem nihil vero,
        enim praesentium dignissimos neque tempora nobis!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eius sed
        voluptatem dicta expedita soluta quidem iste deserunt. Quaerat, itaque.
        Optio eveniet, eaque quia tenetur nemo, aspernatur, amet dolores totam
        reiciendis sed repudiandae. Dolore odio unde aspernatur totam voluptatum
        delectus dolorum tempora, quidem repellendus quis animi a voluptatem
        sapiente aliquam ab impedit ullam fugiat cupiditate quasi? Laboriosam
        atque. Ad voluptatum officiis repellendus saepe, rem dolorem nihil vero,
        enim praesentium dignissimos neque tempora nobis!
      </p>
    </div>
  );
}
