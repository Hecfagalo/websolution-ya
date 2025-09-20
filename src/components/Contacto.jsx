<form name="contact" method="POST" data-netlify="true" className="max-w-md mx-auto space-y-4">
  <input type="hidden" name="form-name" value="contact" />
  <input required type="text" name="nombre" placeholder="Tu nombre" className="w-full p-3 rounded-xl text-gray-900" />
  <input required type="email" name="email" placeholder="Tu correo" className="w-full p-3 rounded-xl text-gray-900" />
  <textarea required name="mensaje" placeholder="Tu mensaje" rows={4} className="w-full p-3 rounded-xl text-gray-900"></textarea>
  <button type="submit" className="bg-white text-secondary px-6 py-3 rounded-xl shadow hover:opacity-90">Enviar</button>
</form>
