const nw=`<article>
              <h3 class="title">{{ article.title }}</h3>
              <p>{{article.description}}</p>
              <button @click="details(article.description)">View Details</button>
            </article>`;
