import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Signaler() {
  const [lieu, setLieu] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState([]);

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <Card className="p-8">

        <h1 className="text-3xl font-bold mb-6">
          Signaler un dépôt d'ordures
        </h1>

        <div className="space-y-6">

          {/* Lieu */}
          <div>
            <Label>Lieu</Label>

            <Input
              placeholder="Ex : Cocody, Riviera 2"
              value={lieu}
              onChange={(e) => setLieu(e.target.value)}
            />

            <p className="mt-2 text-sm text-gray-500">
              Lieu saisi : {lieu}
            </p>
          </div>

          {/* Description */}
          <div>
            <Label>Description</Label>

            <Textarea
              placeholder="Décrivez le problème..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <p className="mt-2 text-sm text-gray-500">
              Description :
            </p>

            <p className="rounded-md bg-gray-100 p-3">
              {description}
            </p>
          </div>

          {/* Photos */}
          <div>
            <Label>Photos</Label>

            <Input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setPhotos(Array.from(e.target.files))}
            />

            {photos.length > 0 && (
              <>
                <p className="mt-4 font-medium">
                  Photos sélectionnées :
                </p>

                <div className="grid grid-cols-2 gap-4 mt-4">

                  {photos.map((photo, index) => (
                    <div
                      key={index}
                      className="rounded-lg border p-3"
                    >
                      <img
                        src={URL.createObjectURL(photo)}
                        alt={photo.name}
                        className="h-40 w-full rounded object-cover"
                      />

                      <p className="mt-2 text-sm text-center">
                        {photo.name}
                      </p>
                    </div>
                  ))}

                </div>
              </>
            )}
          </div>

          <button className="w-full rounded-lg bg-green-600 py-3 text-white hover:bg-green-700">
            Envoyer le signalement
          </button>

        </div>

      </Card>
    </div>
  );
}