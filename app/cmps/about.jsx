export function About() {
    const skills = ['Javascript (ES6+)', 'React', 'Node.js', 'Sass', 'MongoDb']
  return (
    <section className="about-layout">
      <div>
        <h1 className="green">About Me</h1>
        <p className="slate">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex deleniti unde modi magni atque quos nihil minus autem, qui fugiat quis in fuga soluta culpa praesentium odio a repellendus reprehenderit, vel illo! Esse eveniet nam porro unde, laborum placeat. Officiis pariatur et enim dignissimos sed tempora, nobis fugit! Fugiat aliquid necessitatibus quas perferendis quis dolorum fugit ipsam voluptate qui eaque aliquam ipsa incidunt, possimus nam voluptates ab nemo! Neque id quis sapiente distinctio harum placeat rerum fugiat, libero repudiandae molestias magnam aliquam esse eveniet labore voluptas necessitatibus accusamus ea velit fuga similique quas officia aliquid debitis veritatis. Enim, soluta nostrum exercitationem natus ratione rerum voluptate, pariatur dolorem voluptatem corrupti, accusamus voluptas recusandae necessitatibus quas perspiciatis sequi vel doloremque quidem quae temporibus. Sunt quo aperiam harum quaerat quas maiores error iusto blanditiis repellat dolore, laborum assumenda minus eveniet, tenetur veritatis a dolores consequuntur tempora. Explicabo ullam nihil id hic natus illum obcaecati perferendis molestias vitae minima qui, in, eos rerum ex alias consequatur enim ratione ipsum. Delectus, repellendus est maiores molestiae repudiandae minima temporibus omnis voluptatum debitis ut quidem blanditiis veritatis et. Molestias atque veritatis alias exercitationem quod corporis doloremque sapiente perspiciatis, earum iusto facere nam ea totam culpa incidunt eveniet, natus impedit quas fugiat sequi ipsam officia. Eos, tenetur sint rem porro excepturi ea at, dolorum obcaecati optio hic voluptates sed consequuntur quas placeat eligendi architecto quia ab? Reprehenderit facere illum optio officiis vel excepturi nesciunt suscipit est nihil, velit aliquam porro laborum quidem, aut blanditiis facilis quae veritatis quo ducimus aspernatur, dolorem id dolore deserunt. Praesentium, velit repellat natus labore similique dolore. Commodi voluptatum aspernatur reiciendis. Facilis maiores sapiente assumenda, alias, recusandae commodi, necessitatibus veniam reiciendis placeat illum quaerat explicabo nam. Fuga earum beatae rerum illum officiis deserunt provident commodi. Laborum minima officiis illo voluptatibus fugiat dolore quae dignissimos.
        </p>
        <ul>
            {skills.map((skill) => {
              return <li className="green" key={skill.idx}>{skill}</li>
            })}
        </ul>
      </div>
    </section>
  );
}
