import React from "react";
import { Form } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./main.css";


import { faLock,faUser,faNewspaper,faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <div className="home">
    <div class="container">

        <div class="row align-items-center my-5">
          <div class="col-lg-9 mb-11 sm-12">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="http://placehold.it/900x400" class="img-fluid rounded mb-4 mb-lg-0"
           alt="First Image" style={{height:"60vh"}}
          />
          <Carousel.Caption>
            <h4>newone</h4>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="http://placehold.it/900x400" class="img-fluid rounded mb-4 mb-lg-0"
           alt="second Image" style={{height:"60vh"}}
          />
          <Carousel.Caption>
            <h4>new2</h4>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="http://placehold.it/900x400" class="img-fluid rounded mb-4 mb-lg-0"
           alt="Third Image" style={{height:"60vh"}}
          />
          <Carousel.Caption>
            <h4>new3</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>

      <div class="col-lg-3 col-mb-12 col-sm-12">
            <Form style={{border:"1px dotted",padding:"5px"}}>
              <h2 class="font-weight-light">Login</h2>
              <br/>
              <FontAwesomeIcon icon={faUser} style={{marginRight:"13px"}}/><input name="uname" placeholder="Enter the username" type="text" required/><br/>
              <br/><FontAwesomeIcon icon={faLock} style={{marginRight:"10px"}}/> <input name="pass" placeholder="Enter the password" type="password" required/><br/><br/>
              <button type="submit" class="btn-primary" style={{padding:"7px 12px"}}>Login</button>
            </Form>
          </div>
      </div>

      <view>
        <h2> A word from HoD</h2>
          <img
          src="http://placehold.it/900x400"
          style={{ width: "50vh" , height:"50vh", float: 'left',padding:"12px"}}/>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sit dolore at vitae praesentium, corrupti dignissimos ex. Vitae nulla distinctio animi similique consequatur voluptatum illo veniam explicabo, maxime ipsam sequi harum iure impedit quia error iste rerum doloremque asperiores? Blanditiis saepe, totam animi error, quia doloremque odit asperiores nobis maiores dicta ducimus. Expedita exercitationem quos eum reiciendis quis culpa libero illo accusantium, delectus et, quod magni placeat asperiores repellendus rerum tempore? Quasi doloremque nulla aut officia expedita, numquam officiis facilis vel. Ut, molestiae saepe unde officia nobis delectus omnis perferendis voluptatibus accusantium nisi dolor suscipit cupiditate voluptates id odit neque, eveniet placeat repudiandae laborum amet mollitia necessitatibus nihil. Nulla autem animi eaque? Cum rerum debitis, nemo labore ducimus cumque delectus excepturi ipsum eum eveniet ratione ipsa consequuntur fugit, ad quod odit molestiae vero! Nobis, minima iusto tempora aspernatur voluptatum ducimus cumque et quas ab sit reiciendis hic ipsum provident odit, fuga officiis consequatur porro vero! Similique, porro? Numquam illum illo molestiae est? Voluptatem accusamus cupiditate eum expedita adipisci temporibus totam ex? Deleniti excepturi doloremque, a deserunt quibusdam minus, officia eum molestias adipisci dicta qui fuga quas vitae repellat ad! Maiores voluptatum deleniti distinctio repudiandae esse saepe aut mollitia ex voluptatem soluta. Qui vitae eaque explicabo ratione aspernatur officiis quas perspiciatis voluptates minima consequatur. Aspernatur aperiam id, delectus tempore praesentium voluptatibus magni laboriosam eius pariatur distinctio consequuntur consectetur ut animi, dolorum molestiae ab, maiores doloremque! Esse velit, repellendus voluptate, doloribus totam veritatis beatae inventore unde quasi eveniet dolorum nemo atque, accusantium suscipit id ipsa eaque dolor! Ducimus obcaecati quisquam consectetur, harum rem fuga placeat nisi provident beatae inventore modi aut, perspiciatis a, esse pariatur? Facere similique, optio laboriosam sed numquam amet? Distinctio officia, amet neque beatae molestias vel eveniet cupiditate dolorum quod sit at consectetur quasi architecto, rerum facilis fuga earum sequi porro dolore dolorem minima quae modi? Officiis reiciendis illum fugiat harum laborum possimus est numquam sed voluptate totam! Molestias quam nisi porro, iure ex placeat maxime ab facere dignissimos corporis a enim? Exercitationem, illo? Optio sapiente at tempora eveniet obcaecati quis facilis similique iste nam eos fuga velit atque ratione veritatis porro fugit tenetur officia, quibusdam suscipit aperiam beatae vitae minima eaque. Atque pariatur nam natus modi aut earum corporis commodi voluptate suscipit necessitatibus, aperiam nihil fuga at maxime eum ratione molestiae esse. Saepe asperiores corrupti corporis esse error eligendi laudantium labore inventore, odit tempore officiis fuga sapiente commodi possimus culpa aliquid voluptatibus a! Quos blanditiis enim eum saepe eos vel ad odit, maiores illum corrupti sed unde illo aperiam voluptatum doloremque vero?  </p>
      </view>
      </div>



    <div id="tabs">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a href="#i1" class="nav-link active" data-toggle="tab"><h5>News</h5>
          </a>
        </li>

        <li class="nav-item">
          <a href="#i2" class="nav-link" data-toggle="tab"><h5>Notifications</h5>
          </a>
        </li>
      </ul>

      <div class="tab-content"> 
        <li class="tab-pane active" id="i1">
        <p style={{fontSize:"27px"}}>News <FontAwesomeIcon icon={faNewspaper}/></p> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet possimus at veniam dignissimos voluptates consectetur nam asperiores maxime excepturi blanditiis hic minima sequi sunt laborum similique, odit molestiae fugit qui? Sapiente consequuntur obcaecati hic officia. Dolorum sed quibusdam, accusantium inventore laudantium non magnam, adipisci illum perferendis cum qui delectus dolores! Alias rerum laborum amet veniam repudiandae. Vitae fuga magnam ratione doloremque dolorum! Consequatur excepturi enim sit tempora nesciunt quo, quibusdam fugiat iste aliquid, earum laborum omnis maiores quasi ipsa. Perferendis, laudantium. Quia nobis est a voluptates natus odit. Quisquam id illum officia assumenda, libero nam vero quidem molestiae asperiores repellat?</p>
        </li>

        <li class="tab-pane" id="i2">
        <p style={{fontSize:"27px"}}>Notifications <FontAwesomeIcon icon={faBell}/></p> 
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet possimus at veniam dignissimos voluptates consectetur nam asperiores maxime excepturi blanditiis hic minima sequi sunt laborum similique, odit molestiae fugit qui? Sapiente consequuntur obcaecati hic officia. Dolorum sed quibusdam, accusantium inventore laudantium non magnam, adipisci illum perferendis cum qui delectus dolores! Alias rerum laborum amet veniam repudiandae. Vitae fuga magnam ratione doloremque dolorum! Consequatur excepturi enim sit tempora nesciunt quo, quibusdam fugiat iste aliquid, earum laborum omnis maiores quasi ipsa. Perferendis, laudantium. Quia nobis est a voluptates natus odit. Quisquam id illum officia assumenda, libero nam vero quidem molestiae asperiores repellat?</p>
        </li>
      </div>
      </div>
    </div>
  );
}

export default Home;