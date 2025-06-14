import React, { useState } from 'react'
import { alitas, tenders, boneless, papas, combos } from './data'
import { useCart } from './CartContext'

export default function WingsMenu() {
  const { addToCart } = useCart()
  const [selectedSalsas, setSelectedSalsas] = useState({})
  const [errors, setErrors] = useState({})
  const salsasDisponibles = ['BBQ', 'Teriyaki', 'Buffalo', 'Naturales']

  const isPapas = (item) => item.name.toLowerCase().includes('papas')
  const isNivel1 = (item) => item.name.includes('Nivel 1') || item.name.includes('Promo Godín')

  const isMultiSalsa = (item) =>
    !isNivel1(item) && !isPapas(item)

  const handleSalsaChange = (itemId, salsa, isChecked) => {
    setSelectedSalsas((prev) => {
      const current = prev[itemId] || []
      if (isChecked) {
        if (current.length < 2) return { ...prev, [itemId]: [...current, salsa] }
        return prev
      } else {
        return {
          ...prev,
          [itemId]: current.filter((s) => s !== salsa),
        }
      }
    })
  }

  const handleAddToCart = (item) => {
    const selected = selectedSalsas[item.id]
    const needsSalsa = !isPapas(item)

    if (needsSalsa && (!selected || selected.length === 0 || selected === '')) {
      setErrors((prev) => ({ ...prev, [item.id]: 'Selecciona al menos una salsa' }))
      return
    }

    const salsaFinal = Array.isArray(selected) ? selected.join(' + ') : selected

    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      salsa: salsaFinal,
    })

    setErrors((prev) => ({ ...prev, [item.id]: '' }))
  }

  const renderSalsaSelector = (item) => {
    if (isPapas(item)) return null

    const selected = selectedSalsas[item.id] || (isNivel1(item) ? '' : [])

    return (
      <div className="mb-1">
        {isNivel1(item) ? (
          <select
            value={selected}
            onChange={(e) =>
              setSelectedSalsas((prev) => ({ ...prev, [item.id]: e.target.value }))
            }
            className="w-full border rounded px-2 py-1 text-sm"
          >
            <option value="">-- Elige una salsa --</option>
            {salsasDisponibles.map((salsa) => (
              <option key={salsa} value={salsa}>
                {salsa}
              </option>
            ))}
          </select>
        ) : (
          <div className="flex flex-col items-start gap-1">
            {salsasDisponibles.map((salsa) => (
              <label key={salsa} className="text-sm">
                <input
                  type="checkbox"
                  value={salsa}
                  checked={selected.includes(salsa)}
                  onChange={(e) =>
                    handleSalsaChange(item.id, salsa, e.target.checked)
                  }
                  disabled={
                    !selected.includes(salsa) && selected.length >= 2
                  }
                  className="mr-1"
                />
                {salsa}
              </label>
            ))}
          </div>
        )}

        {errors[item.id] && (
          <p className="text-xs text-red-500 mt-1">{errors[item.id]}</p>
        )}
      </div>
    )
  }

  const renderItem = (item) => (
    <li key={item.id} className="mb-6 flex justify-between items-start">
      <div className="flex items-center w-2/3">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded mr-4"
        />
        <div>
          <p className="font-medium">{item.name}</p>
          {item.portions && <p className="text-sm text-gray-600">Porciones: {item.portions}</p>}
          {item.description && <p className="text-sm text-gray-500">{item.description}</p>}
        </div>
      </div>

      <div className="text-right w-1/3">
        <p className="font-semibold mb-1">${item.price}</p>

        {renderSalsaSelector(item)}

        <button
          className="w-full px-3 py-1 bg-yellow-400 rounded hover:bg-yellow-500 text-sm"
          onClick={() => handleAddToCart(item)}
        >
          Agregar
        </button>
      </div>
    </li>
  )

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Menú Bootei Wings</h2>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Alitas</h3>
        <ul>{alitas.map(renderItem)}</ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Tenders</h3>
        <ul>{tenders.map(renderItem)}</ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Boneless</h3>
        <ul>{boneless.map(renderItem)}</ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Papas a la Francesa</h3>
        <ul>{papas.map(renderItem)}</ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Combos</h3>
        <ul>{combos.map(renderItem)}</ul>
      </section>
    </div>
  )
}
