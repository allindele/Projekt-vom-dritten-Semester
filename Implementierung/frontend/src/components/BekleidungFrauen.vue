<template>
     <div>
        <img src="mainimage.jpg" class="logo" alt="Foto nicht gefunden" title="Logo des Internats" width="125" height="125" />
    </div>
    <p>
        <h4 class="handlung">{{Eingangsnachricht}}</h4>
    </p>
        <form action="farbefrau.html" method="post" target="_self">
            <p> Machen Sie denn eine Angabe Bitte: <br />
             <input type ="radio" name="typ"  value="Rock"> Rock<br>
             <input type ="radio" name="typ" value="Rock"> Hose <br>
             <button type="submit" >Auswählen</button>
            </p>
        </form>
        
    </p>    
</template>
<script lang="ts">
 data() {
        return {
            Eingangsnachricht : "Wollen Sie entweder eine Hose oder einen Rock einziehen? Bitte beachten Sie dass, das Einziehen eines Anzugs sowie einr Bluse/ eines Hemdes ein Pflicht ist"
        }
    }
</script>
