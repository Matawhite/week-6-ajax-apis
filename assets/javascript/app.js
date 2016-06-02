$('#findPokemon').on('click', function(){
  var btnName = $('#poke-input').val();
  if(allPokemon.includes(btnName) !== true){
    $('#warning').empty();
    var newBtn = $('<button>');
    newBtn.attr('class', 'callImg btn btn-default');
    newBtn.text(btnName);
    newBtn.on('click', getGiphy)
    $('#buttonsHere').append(newBtn)
}else{
  $('#warning').html('<p class="alert alert-danger" role="alert">Sorry that is not a valid Pokemon<p>')
}
  return false;
})

function getGiphy(){
  var pokemon = $(this).text()
  console.log(pokemon)
  var baseURL = 'http://api.giphy.com/v1/gifs/search?q=' + encodeURI(pokemon) + '&limit=10&api_key=dc6zaTOxFJmzC';
  console.log(baseURL)
  $.ajax({
    url: baseURL,
    method: 'GET'
  })
  .done(function(res){
    for(var i = 0; i < res.data.length; i++){
      var state = 'still';
      var still = res.data[i].images.fixed_width_still.url;
      var animate = res.data[i].images.fixed_width.url;
      var imgSrc = still;
      var newImg = $('<img>');
      newImg.attr('src', imgSrc);
      newImg.attr('class', 'giphyImg');
      newImg.attr('data-state', state);
      newImg.attr('data-still', still);
      newImg.attr('data-animate', animate);
      $('#mygallery').prepend(newImg);
    }
    $('.giphyImg').on('click', function(){
      if(state === 'still'){
        state = 'animate';
        $(this).attr('src', $(this).attr('data-animate'));
        $(this).attr('data-state', 'animate');
      }else{
        state = 'still';
        $(this).attr('src', $(this).attr('data-still'));
        $(this).attr('data-state', 'still');
      }
    })
  })
}

$('#clearButtons').on("click",function(){
    $('#buttonsHere').empty();
    $('.callImg').unbind();
  })

$('#clearImages').on("click",function(){
    $('#mygallery').empty();
  })

var allPokemon = ["ekans","wartortle","blastoise","metapod","butterfree","weedle","kakuna","beedrill","arbok","pidgeotto","pidgeot","raticate","spearow","fearow","raichu","pikachu","nidoran-f","sandshrew","nidorina","nidoran-m","nidoking","nidoqueen","vulpix","nidorino","clefable","ninetales","jigglypuff","venomoth","golbat","wigglytuff","zubat","oddish","gloom","meowth","mankey","vileplume","paras","parasect","venonat","diglett","dugtrio","persian","psyduck","golduck","growlithe","arcanine","poliwag","poliwhirl","poliwrath","abra","kadabra","machop","machoke","machamp","bellsprout","ivysaur","charmander","venusaur","rattata","charmeleon","squirtle","caterpie","pidgey","slowbro","rapidash","magnemite","magneton","farfetchd","doduo","haunter","dewgong","dodrio","seel","grimer","cloyster","muk","gastly","drowzee","onix","gengar","exeggcute","hypno","krabby","kingler","voltorb","electrode","exeggutor","cubone","lickitung","hitmonlee","hitmonchan","weezing","koffing","rhydon","rhyhorn","chansey","tangela","kangaskhan","horsea","seadra","staryu","starmie","goldeen","mr-mime","scyther","jynx","magmar","electabuzz","pinsir","ditto","lapras","tauros","gyarados","vaporeon","eevee","flareon","jolteon","porygon","omanyte","victreebel","tentacool","tentacruel","graveler","geodude","golem","ponyta","meganium","dratini","bayleef","mewtwo","sentret","mew","chikorita","quilava","noctowl","cyndaquil","typhlosion","natu","totodile","croconaw","feraligatr","furret","hoothoot","crobat","ledyba","ledian","ariados","chinchou","lanturn","cleffa","pichu","igglybuff","togetic","togepi","xatu","mareep","ampharos","bellossom","politoed","marill","sudowoodo","azumarill","hoppip","sunkern","jumpluff","skiploom","aipom","sunflora","yanma","espeon","umbreon","wooper","quagsire","murkrow","misdreavus","girafarig","unown","pineco","wobbuffet","dunsparce","forretress","kabuto","gligar","aerodactyl","snorlax","articuno","zapdos","moltres","dragonair","slugma","remoraid","magcargo","octillery","delibird","mantine","houndoom","skarmory","houndour","kingdra","donphan","phanpy","porygon2","smoochum","stantler","smeargle","tyrogue","elekid","magby","miltank","entei","blissey","raikou","suicune","larvitar","pupitar","sceptile","lugia","ho-oh","celebi","treecko","grovyle","linoone","torchic","blaziken","combusken","wurmple","mudkip","marshtomp","swampert","cascoon","poochyena","mightyena","silcoon","beautifly","dustox","seedot","lotad","lombre","ludicolo","nuzleaf","shiftry","taillow","scizor","granbull","heracross","qwilfish","shuckle","sneasel","ursaring","breloom","shroomish","vigoroth","slakoth","loudred","nosepass","slaking","nincada","whismur","exploud","azurill","makuhita","lairon","hariyama","mawile","skitty","delcatty","sableye","aron","aggron","electrike","medicham","roselia","minun","manectric","plusle","volbeat","illumise","swalot","gulpin","carvanha","sharpedo","wailmer","camerupt","torkoal","numel","spoink","trapinch","grumpig","flygon","spinda","vibrava","cacnea","cacturne","swablu","whiscash","lunatone","altaria","seviper","solrock","crawdaunt","claydol","corphish","barboach","baltoy","lileep","wingull","ralts","pelipper","masquerain","surskit","kirlia","ninjask","absol","shuppet","wynaut","dusclops","chimecho","snorunt","glalie","sealeo","spheal","walrein","clamperl","huntail","gorebyss","groudon","bagon","shelgon","relicanth","luvdisc","metang","beldum","metagross","regirock","grotle","regice","kyogre","registeel","latias","latios","rayquaza","jirachi","turtwig","torterra","shinx","chimchar","infernape","monferno","piplup","kricketune","roserade","prinplup","empoleon","starly","staraptor","staravia","bidoof","kricketot","luxio","budew","luxray","cranidos","rampardos","shieldon","feebas","bastiodon","burmy","mothim","anorith","armaldo","kecleon","banette","milotic","castform","duskull","drifloon","chingling","lopunny","drifblim","buneary","honchkrow","mismagius","glameow","purugly","bronzong","stunky","skuntank","bronzor","bonsly","mime-jr","hippopotas","happiny","spiritomb","gible","gabite","garchomp","munchlax","carnivine","riolu","lucario","finneon","croagunk","hippowdon","drapion","toxicroak","lumineon","mantyke","snover","weavile","abomasnow","rhyperior","magnezone","lickilicky","yanmega","electivire","togekiss","glaceon","magmortar","leafeon","gliscor","mamoswine","porygon-z","gallade","probopass","dusknoir","froslass","rotom","uxie","mesprit","dialga","vespiquen","buizel","pachirisu","cherubi","floatzel","ambipom","cherrim","gastrodon","darkrai","tepig","snivy","servine","serperior","pignite","oshawott","emboar","stoutland","dewott","patrat","watchog","lillipup","herdier","purrloin","liepard","pansage","simisage","pansear","tranquill","panpour","simipour","munna","musharna","pidove","woobat","unfezant","blitzle","zebstrika","roggenrola","boldore","gigalith","excadrill","swoobat","drilbur","audino","timburr","conkeldurr","tympole","palpitoad","throh","seismitoad","sawk","sewaddle","swadloon","venipede","whirlipede","scolipede","cottonee","whimsicott","petilil","regigigas","lilligant","basculin-red-striped","sandile","krokorok","giratina-altered","manaphy","victini","arceus","shaymin-land","archeops","yamask","trubbish","cofagrigus","tirtouga","carracosta","archen","gothorita","zorua","gothita","zoroark","minccino","cinccino","gothitelle","swanna","solosis","duosion","reuniclus","vanillite","vanillish","deerling","vanilluxe","karrablast","sawsbuck","emolga","escavalier","amoonguss","frillish","foongus","jellicent","joltik","alomomola","galvantula","klang","ferroseed","klink","ferrothorn","tynamo","eelektrik","beheeyem","eelektross","litwick","elgyem","lampent","chandelure","axew","haxorus","cubchoo","beartic","cryogonal","shelmet","stunfisk","accelgor","mienfoo","mienshao","darumaka","darmanitan-standard","maractus","scraggy","dwebble","scrafty","crustle","sigilyph","vullaby","mandibuzz","heatmor","cobalion","deino","hydreigon","larvesta","volcarona","delphox","thundurus-incarnate","terrakion","virizion","reshiram","zekrom","landorus-incarnate","kyurem","keldeo-ordinary","genesect","meloetta-aria","chespin","quilladin","chesnaught","fletchinder","fennekin","braixen","froakie","frogadier","spewpa","greninja","bunnelby","diggersby","fletchling","talonflame","litleo","scatterbug","vivillon","florges","flabebe","pancham","floette","meowstic-male","skiddo","gogoat","furfrou","espurr","honedge","spritzee","doublade","aegislash","swirlix","aromatisse","bisharp","slurpuff","malamar","inkay","binacle","golett","golurk","pawniard","bouffalant","rufflet","braviary","durant","amaura","goomy","aurorus","klefki","sylveon","goodra","hawlucha","dedenne","sliggoo","gourgeist-average","pumpkaboo-average","phantump","bergmite","trevenant","zygarde","avalugg","noibat","xerneas","noivern","yveltal","deoxys-attack","deoxys-defense","skrelp","clauncher","wormadam-sandy","deoxys-speed","tyrunt","carbink","rotom-heat","wormadam-trash","darmanitan-zen","rotom-frost","shaymin-sky","rotom-wash","rotom-fan","rotom-mow","castform-sunny","castform-rainy","basculin-blue-striped","tornadus-therian","meloetta-pirouette","kyurem-white","landorus-therian","thundurus-therian","kyurem-black","meowstic-female","pumpkaboo-large","keldeo-resolute","aegislash-blade","pumpkaboo-small","pumpkaboo-super","clawitzer","gourgeist-small","gourgeist-large","gourgeist-super","venusaur-mega","charizard-mega-x","charizard-mega-y","blastoise-mega","alakazam-mega","heliolisk","tyrantrum","dragonite","kabutops","swellow","druddigon","deoxys-normal","snubbull","shedinja","wailord","cradily","combee","wormadam-plant","palkia","fraxure","skorupi","tornadus-incarnate","pangoro","pinsir-mega","aerodactyl-mega","gyarados-mega","bulbasaur","mewtwo-mega-x","heracross-mega","mewtwo-mega-y","ampharos-mega","scizor-mega","houndoom-mega","banette-mega","tyranitar-mega","blaziken-mega","gardevoir-mega","mawile-mega","aggron-mega","medicham-mega","manectric-mega","absol-mega","garchomp-mega","lucario-mega","abomasnow-mega","seaking","sandslash","clefairy","shellder","alakazam","steelix","flaaffy","tyranitar","tropius","shellos","azelf","heatran","simisear","krookodile","leavanny","ducklett","dragalge","barbaracle","helioptile","gengar-mega","kangaskhan-mega","charizard","omastar","weepinbell","castform-snowy","slowpoke","gurdurr","bibarel","garbodor","klinklang","primeape","hitmontop","chatot","zweilous","tangrowth","marowak","pyroar","magikarp","spinarak","slowking","giratina-origin","teddiursa","zigzagoon","cresselia","gardevoir","meditite","zangoose","salamence","phione","samurott","swinub","piloswine","corsola", "sloth"
];
