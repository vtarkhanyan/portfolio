* {
    box-sizing: border-box;
    padding: 0;
    margin: 0
}


#main {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 1fr auto 1fr;
    max-width: 900px;
    background-color: burlywood;
    margin: auto;
    padding: 20px;
    
   
    
}

#header {
    background-color: aquamarine;
    text-align: center;
    
}

#section {
    display: grid;
    grid-template-columns: 1fr 3fr; 
    padding: 25px 10px;
    background-colors: azure;
    
}
.section_div {

    display: grid;
    border: 2px dotted red
}
.section_div_left {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    min-width: 170px;
    max-width: 200px;
    
    
    
}
.section_div_left div {
    borderc: 1px solid blue;
}
.div_left_ul {
    
    list-style: none;
    line-height: 2.5
}
.div_left_li{
    padding-left: 8px;
borders: 2px solid;
    background-color: aqua
}
.div_left_li i{
    padding-right: 10px;
    background-color: aqua
}

#footer {
    
    background-color: bisque
}
summary {
  font-weight: bold;

}
summary:focus {
  list-style-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/down-arrow.svg);
}
summary::-webkit-details-marker {
    font-size: 22px;

  colorf: blue;

}

.section_div_rightf{
   text-align: center;
}
#name_data {
    text-align: center;
    font-size: 25px;
}
.top_fieldset{
    padding: 0 0px 0 20;
    margin-bottom: 20
}
.top_fieldset_div {
    display: grid;
    grid-template-columns: 24px auto 140px;
    align-items: center;
    margin-bottom: 15px;
    border: 2px solid red
}
.div_mid {
    margin-right: 5px
}
.div_right {
 text-align: end
}
.div_right *{
    padding-right: 7
}
#btn{
    
    width: 195px;
    height: 35px;
    font-size: 30;
    border-radius: 18px
}
.fa-plus {
    padding-right: 10px;
        
}

.fa-check{
    color: green;
}
.overline{
    font-style: italic;
    text-decoration: line-through;
}
.bg_color {
    background-color: azure;
}

.div_right_top_add {
    margin-top:20px; 
    border: 2px solid;
    width: 100%;
    text-align: center;

font-size: 22;
    border-radius: 8px
    
}
.div_right_top_add *{
margin-top: 20px;
    display: inline-block;
}

