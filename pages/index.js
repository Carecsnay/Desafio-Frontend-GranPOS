import Posts from "@/components/Posts";

export default function Home() {
  return (
    <div className="container">
      <Posts title='Titulo legal 1'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati laudantium eius, autem qui placeat sunt rerum iste repellendus asperiores! Nesciunt accusamus at necessitatibus! Tenetur, accusamus corrupti! Dignissimos nihil neque deleniti!
          Quos voluptatibus dolorum amet id quibusdam rem illum ut nobis, a incidunt. Sit alias necessitatibus quis. Sapiente magni facere sunt voluptatem, quia, odio nesciunt placeat, eaque recusandae quae vel reiciendis!</p>
      </Posts>

      <Posts title='Titulo legal 2'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aperiam vitae doloribus placeat quaerat eum, at quisquam aspernatur nulla aliquid officia delectus deleniti quo, ratione porro optio in ea! Velit.</p>
      </Posts>
    </div>
  );
}
