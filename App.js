import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import React, { Component } from 'react';
import Header from './components/Header/Header.js';
import MainPagePublicQuestions from './components/Questions/MainPagePublicQuestions.js';
import LeftSidebar from './components/LeftSidebar/LeftSidebar.js';
import Uslugi from './components/Uslugi/Uslugi.js';
import './App.css';

import OwlCarousel from 'react-owl-carousel2';
/*import ButtonBases from './Caresel_one';
import Test  from './items';
import Items   from './items_glava';*/
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
/*import ItemsJur from './Itemsjur';*/
import Skeleton from '@material-ui/lab/Skeleton';
class App extends Component {
render() {
	return (
<body>
	<Header />
	<MainPagePublicQuestions />
	{/*<div class="row col-lg-11 p-0 mx-auto">
		<LeftSidebar />
		<UserPageQuestions />
	</div>*/}	
	<Uslugi />
{/*<ButtonBases />*/}

















<div class="container-fluid block_4">
<div class="row col-lg-12 ">
<h1  class="col-lg-12">Как мы работаем</h1>
<div class="col-lg-12  col-md-13 block_4_img"></div>
<div  class="col-lg-5  col-md-5 block_4_but"></div>
</div>
</div>

<div class="block_5">
<h1 class="col-lg-12">Последние Вопросы</h1>

{/*<Items />*/}
</div>


<div class="container-fluid">

</div>

<div class="container-fluid block_6 col-lg-12">
<h1 class="col-lg-12">Задано Вопросов</h1>
<div class=" row col-lg-12 block_6_one">
<ul class="col-lg-6 block_6_one_item">

<p>Бесплатная</p>
<h5 >сегодня</h5>
    <li>как оспорить неазаконный выписанный штраф за парковку</li> 
    <h5 >сегодня</h5>
    <li>fdf</li>
    <h5 >сегодня</h5>
    <li>fdfd</li>
    <h5 >сегодня</h5>
    <li>fdf</li>
    <h5 >сегодня</h5>
    <li>fdf</li>
    <h5 >сегодня</h5>
    <li>fdf</li>
    <h5 >сегодня</h5>
    <li>fdf</li> 
    <h5 >сегодня</h5>
    <li>fdfd</li>


</ul>
<ul class="col-lg-6 block_6_one_item">

<p>Платные</p>
<li>как оспорить неазаконный выписанный штраф за парковку</li> 
    <h5 >сегодня</h5>
    <li>fdf</li>
    <h5 >сегодня</h5>
    <li>fdfd</li>
    <h5 >сегодня</h5>
    <li>fdf</li>
    <h5 >сегодня</h5>
    <li>fdf</li>
    <h5 >сегодня</h5>
    <li>fdf</li>
    <h5 >сегодня</h5>
    <li>fdf</li> 
    <h5 >сегодня</h5>
    <li>fdfd</li>
</ul>

<a href="#" class="col-lg-4 but_consult">Заказать Консультацию</a>
</div>







</div>




<div class="container-fluid block_8 ">

<div class=" row block_8_row col-lg-7 mx-auto">
<div class="col-lg-4  col-md-4 block_8_item">
<h2>Задайте вопрос</h2>
<p style={{'font-size':'20px'}}>
и получите ответ на него от одного, 
из наших юристов.
совершенно Бесплатно
</p>

</div>
<div class="col-lg-8  col-mnd-7 block_8_item">

<textarea rows="10" cols="45" class=" col-md-12 col-lg-12" name="Ваш запор" placeholder="ваш вопрос"></textarea>
<input type="text" class="col-lg-4 col-md-4 text_form"/>
<input type="text"  class="col-lg-4 col-md-4  text_form"/>
<input type="submit"  class="col-lg-4 col-md-4 text_form"/>

</div>


</div>

</div>
<div class="block_9">
<h1 class="col-lg-12">Вопросы в теме</h1>
<div class="row   col-lg-9  mx-auto block_9_row">
<ul class="col-lg-3">
А
<li>Алименты</li>
<li>Автомобильное право</li>
<li>Авторские и смежные права</li>
<li>Административное право</li>
<li>Арбитраж</li>
</ul>
<ul class="col-lg-3">
Ж
<li>Жалоба</li>
<li>Жилищное право</li>
<li>ЖКХ</li>

</ul>
<ul class="col-lg-3">
М
<li>Медицинское право</li>
<li>Международное право</li>
<li>Миграционное право</li>

</ul>
<ul class="col-lg-3">
С
<li>Секс и интим</li>
<li>Семейное право</li>
<li>Социальное обеспечение</li>
<li>Страхование</li>
<li>Субсилии</li>
<li>Судопроизводство</li>
</ul>
<ul class="col-lg-3">
Б
<li>Банковское право</li>
<li>Банкронство</li>
<li>Бухглатерский учет</li>

</ul>
<ul class="col-lg-3">
З
<li>Завещание</li>
<li>Защита прав потребителей</li>
<li>Заявление</li>
<li>Земельное право</li>
</ul>
<ul class="col-lg-3">
Н
<li>Надбавки</li>
<li>Налоги</li>
<li>Наследство</li>
<li>Недвижемость</li>
<li>Нотариат</li>
</ul>
<ul class="col-lg-3">
Т
<li>Таможенное право</li>
<li>Трудовое право</li>
<li>Уголовное право</li>

</ul>
В
<ul class="col-lg-3">
<li>Взыскание задолжности</li>
<li>Взятка</li>
<li>Военное право</li>

</ul>
<ul class="col-lg-3">
И
<li>Имущество</li>
<li>Инвалидность</li>
<li>Интернет</li>
<li>Иск</li>
</ul>
<ul class="col-lg-3">
О
<li>Образование</li>
<li>Опека</li>

</ul>
<ul class="col-lg-2">
Ф
<li>Финансовое право</li>

</ul>
<ul class="col-lg-3">
Г
<li>ГИБДД</li>
<li>Госзаказы и госимущества</li>
<li>Гражданское право</li>
<li>Гражданство</li>
</ul>
<ul class="col-lg-3">
К
<li>конституционное право</li>
<li>Кредит</li>
<li>Курение и алкоголь</li>
<li></li>
</ul>
<ul class="col-lg-3">
П
<li>Пенсии и пособия</li>
<li>Полиция</li>
<li>Право собственности</li>
<li></li>
</ul>
<ul class="col-lg-3">
Э
<li>Экспертиза</li>

</ul>
<ul class="col-lg-3">
Д
<li>Договор</li>
<li>Документы</li>
<li>Деловое участие</li>
<li></li>
</ul>
<ul class="col-lg-3">
Л
<li>Лицензирование</li>
<li>Льготы и компенсации</li>

</ul>
<ul class="col-lg-3">
Р
<li>Развод</li>
<li></li>
<li></li>
<li></li>
</ul>
<ul class="col-lg-3">
Ю
<li>Юридические лица</li>
<li></li>
<li></li>
<li></li>
</ul>
<ul class="col-lg-3">
<li></li>
<li></li>
<li></li>
<li></li>
</ul>


</div>
</div>
<div class="container-fluid  recomandations_one">


{/*<Test/>*/}


</div>


<div class="container-fluid recomandations">
<h3 class="h3">Виртуальный Журнал</h3>

{/*<ItemsJur />*/}
<input type="submit" class="state mx-auto"/>

</div>






</body>


 );
}


}





export default App;
