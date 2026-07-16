export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Nos fonctionnalités
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold">
              📷 Signaler
            </h3>

            <p className="mt-4 text-gray-600">
              Prenez une photo d'un dépôt d'ordures et envoyez-la.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold">
              📍 Localiser
            </h3>

            <p className="mt-4 text-gray-600">
              Consultez la carte des signalements.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold">
              👥 Participer
            </h3>

            <p className="mt-4 text-gray-600">
              Ensemble, rendons Abidjan plus propre.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}