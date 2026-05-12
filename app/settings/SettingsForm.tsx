'use client'

import { useState } from 'react'
import { signOut } from '@/app/actions/auth'
import { Save, LogOut, Eye, EyeOff } from 'lucide-react'

interface SettingsFormProps {
  profile: any
  user: any
}

export default function SettingsForm({ profile, user }: SettingsFormProps) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch('/api/profile/update', {
        method: 'POST',
        body: JSON.stringify({
          full_name: formData.get('fullName'),
          bio: formData.get('bio'),
          is_public: formData.get('isPublic') === 'on',
          show_stats: formData.get('showStats') === 'on',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        setSuccess(true)
        setTimeout(() => setSuccess(false), 3000)
      } else {
        setError('Erreur lors de la mise à jour du profil')
      }
    } catch (err) {
      setError('Erreur lors de la mise à jour du profil')
    }

    setLoading(false)
  }

  return (
    <div className="space-y-6">
      {/* Profile Settings */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Informations du profil
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username (read-only) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom d'utilisateur
            </label>
            <input
              type="text"
              value={profile.username}
              disabled
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
            />
            <p className="text-xs text-gray-500 mt-1">
              Le nom d'utilisateur ne peut pas être modifié
            </p>
          </div>

          {/* Email (read-only) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={user.email}
              disabled
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
            />
          </div>

          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Nom complet
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              defaultValue={profile.full_name || ''}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Jean Dupont"
            />
          </div>

          {/* Bio */}
          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              rows={4}
              defaultValue={profile.bio || ''}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Parlez un peu de vous..."
              maxLength={500}
            />
            <p className="text-xs text-gray-500 mt-1">
              Maximum 500 caractères
            </p>
          </div>

          {/* Privacy Settings */}
          <div className="space-y-4 pt-4 border-t border-gray-200">
            <h3 className="font-semibold text-gray-900">
              Paramètres de confidentialité
            </h3>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-gray-600" />
                <div>
                  <label
                    htmlFor="isPublic"
                    className="font-medium text-gray-900"
                  >
                    Profil public
                  </label>
                  <p className="text-sm text-gray-500">
                    Permettre aux autres utilisateurs de voir votre profil
                  </p>
                </div>
              </div>
              <input
                id="isPublic"
                name="isPublic"
                type="checkbox"
                defaultChecked={profile.is_public}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-gray-600" />
                <div>
                  <label
                    htmlFor="showStats"
                    className="font-medium text-gray-900"
                  >
                    Afficher les statistiques
                  </label>
                  <p className="text-sm text-gray-500">
                    Afficher vos statistiques détaillées sur votre profil public
                  </p>
                </div>
              </div>
              <input
                id="showStats"
                name="showStats"
                type="checkbox"
                defaultChecked={profile.show_stats}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Success/Error Messages */}
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
              Profil mis à jour avec succès!
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="w-5 h-5" />
            {loading ? 'Enregistrement...' : 'Enregistrer les modifications'}
          </button>
        </form>
      </div>

      {/* Account Actions */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Actions du compte
        </h2>

        <button
          onClick={() => signOut()}
          className="w-full flex items-center justify-center gap-2 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
        >
          <LogOut className="w-5 h-5" />
          Se déconnecter
        </button>
      </div>

      {/* Profile URL */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-2">Votre URL de profil</h2>
        <p className="opacity-90 mb-4">
          Partagez votre profil CFA Arena avec vos contacts
        </p>
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
          <code className="text-sm break-all">
            {process.env.NEXT_PUBLIC_APP_URL}/profile/{profile.username}
          </code>
        </div>
      </div>
    </div>
  )
}
