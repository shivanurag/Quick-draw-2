quick_draw_data_set=['pen','paper','book','bottle','phone','alarm','bulb','glass','shoe','earth','box','table','chair','binoculars','spectacles','bell','laptop','up arrow','down arrow','right arrow','left arrow','tree','butterfly','flower','mango','pineapple','headphones','smiley emoji','sad emoji','angry emoji'];
random_no = Math.floor((Math.random()*quick_draw_data_set.length)+1);
console.log(quick_draw_data_set[random_no]);
sketch=quick_draw_data_set[random_no];
document.getElementById("sketch_name").innerHTML=sketch;
timer_counter=0;
timer_check="";
drawn_sketch="";
answer_holder="";
score=0;

function updateCanvas()
{
    background("white");
    random_no=Math.floor((Math.random()*quick_draw_data_set.length)+1);
    console.log(quick_draw_data_set[random_no]);
    sketch=quick_draw_data_set[random_no];
    document.getElementById("sketch_name").innerHTML=sketch;
}

function setup()
{
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
}

function draw()
{
    if(drawn_sketch==sketch)
    {
        answer_holder="set"
        score++;
        document.getElementById("scoreResult").innerHTML=score;
    }
}

function checkSketch()
{
    if(drawn_sketch==sketch)
    {
        timer_counter++;
        document.getElementById("timerResult").innerHTML=timer_counter;
        console.log(timer_counter);
    }
    if(timer_counter>400)
    {
        timer_counter=0;
        timer_check="completed";
    }
    if(timer_check=="completed"||answer_holder=="set")
    {
        timer_check="";
        answer_holder="";
        updateCanvas();
    }
}