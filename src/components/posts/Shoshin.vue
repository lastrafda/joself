<template>
  <div class="px-4 py-8">
    <img src="../../assets/shoshin.jpg" class="w-16" alt="shoshin" />
    <p>Shoshin es un termino del Budismo Zen que representa el concepto de "Mentalidad del principiante", la idea de tener una mente abierta que esta dispuesta a explorar posibilidades.</p>
    <br />
    <p>Quizás hayas escuchado una historia similar a esta:</p>
    <br />
    <p>Un PhD en busca de iluminación va donde un sabio monje por guía espiritual. El PhD domina la discusión, describiendo todo lo que ha aprendido en su vida y resaltando los múltiples papers que ha escrito. El monje le pregunta: ¿Un tecito? y comienza a servir té en la copa del PhD. Y continúa sirviendole té hasta la copa se comienza a revalsar, empapando la mesa e incluso el suelo!.</p>
    <br />
    <p>
      <b>PhD:</b> ¿Qué estás haciendo?
    </p>
    <br />
    <p>
      <b>Monje:</b> --Sirviendo té-- Tu mente es como esta copa, está tan llena con ideas que nada más puede entrar. Debes vaciar tu mente antes de que podamos comenzar.
    </p>
    <br />
    <p>Los mejores programadores son como copas vacias, que constantemente exploran nuevas tecnologías con una mente abierta. Por otro lado, los programadores mediocres han llenado sus mentes con delusión: "PostgresSQL es la unica base de datos a considerar", "Scala es malo", "JavaScript es el mejor lenguaje de programación" o "WordPress es horrible" (bueno quizás eso sí :v).</p>
    <br />
    <p>Es mejor tener una mentalidad de principiante cuando se quiere aprender algo, te puede ayudar a captar ideas valiosas que de otra manera perderías :)</p>
    <br />
    <quote>
      <template
        v-slot:quote
      >If your mind is empty, it is always ready for anything, it is open to everything. In the beginner's mind there are many possibilities, but in the expert's mind there are few.</template>
      <template v-slot:autor>― Shunryu Suzuki</template>
    </quote>
    <br />
    <div>
      Links que podrían resultarte útiles:
      <ul>
        <li>
          <a
            href="https://www.youtube.com/watch?v=Nl2_NCY5aik"
            class="text-yellow-600 text-md font-bold px-2 py-4 hover:underline"
            target="_blank"
          >Shoshin: Beginner's Mind - The Zen Approach To Grow Faster</a>
          <span class="relative text-md italic" style="top: -1px">por Valerian</span>
        </li>
        <li>
          <a
            href="https://jamesclear.com/shoshin"
            class="text-yellow-600 text-md font-bold px-2 py-4 hover:underline"
            target="_blank"
          >This Zen Concept Will Help You Stop Being a Slave to Old Beliefs</a>
          <span class="relative text-md italic" style="top: -1px">por James Clear</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Quote from "@/components/Quote";
export default {
  components: {
    Quote
  }
};
</script>

<style>
</style>