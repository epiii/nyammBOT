var timer = setInterval(general,1000);

    function general(){
        if(document.getElementsByClassName("app-wrapper-main")[0] != null){
            var item2 = document.getElementsByClassName("pane-header pane-list-header")[0];
            var panel = document.getElementsByClassName("chatlist-panel pane pane-one")[0];
            var element = item2.cloneNode(true);							  // Create text and reps inputs
            element.style.zIndex = 0;                // This way the menu doesn't go below our app
            element.innerHTML = "<input type='text' id='mensaje' placeholder='Message' style='margin-right:10px' size='30'><input type='number' min='1' id='repeticiones' style='width:50px;padding-left:5px;margin-right:5px'>Times<div id='spam' data-icon=\"send\" class=\"img icon icon-send\" style='margin-left: 5px;cursor:pointer;'><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path opacity=\".4\" d=\"M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z\"></path></svg></div>";
            panel.insertBefore(element, panel.childNodes[1]);					  // Insert everything we have created
            document.getElementById("spam").addEventListener("click", spam);     // Assign a function to the botton
            clearInterval(timer);
        }else{
            console.log("WS Spam: Waiting for whatsapp to load...");
        }
    }

    function dispatch(input, message) {
        console.log("msg ="+message);
        console.log(input);
        InputEvent = Event || InputEvent;
        var evt = new InputEvent('input', {						// Create a new event from type "input"
            bubbles: true
        });
        input.innerHTML = message;								// Get text to spam
        input.dispatchEvent(evt);								// Fire the event (inserts text) in the input field.
        document.querySelector(".input-container").submit();           // Press send button
        // document.querySelector(".compose-btn-send > .icon-send").click(); 			// Press send button
    }

    function spam(){
        var text = document.getElementById("mensaje").value;       // Get text to spam
        var reps = document.getElementById("repeticiones").value;  // Get number of repetitions
        var input = document.getElementsByClassName("input-container")[0];  // Select the input 
        var counter = 1; 											// Initialize a counter
        while(counter <= reps){									// Iterate the number of repetitions needed
            dispatch(input, text); 									// Spam!
            counter++;
        }
}