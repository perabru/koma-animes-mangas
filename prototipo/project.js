window.PROTOTYPE_CONFIG = {
  "id": "koma",
  "name": "KOMA",
  "initial": "catalog",
  "dark": true,
  "avatar": "NV",
  "roles": [
    {
      "id": "public",
      "name": "Público",
      "screens": [
        "catalog",
        "work",
        "player",
        "reader",
        "favorites"
      ]
    },
    {
      "id": "creator",
      "name": "Criador",
      "screens": [
        "upload",
        "moderation"
      ]
    },
    {
      "id": "moderator",
      "name": "Moderação",
      "screens": [
        "moderation",
        "catalog"
      ]
    }
  ],
  "nav": [
    [
      "Catálogo",
      "catalog"
    ],
    [
      "Minha lista",
      "favorites"
    ],
    [
      "Área do criador",
      "upload"
    ]
  ],
  "screens": [
    {
      "id": "catalog",
      "title": "Catálogo",
      "note": "Filtre por formato, busque um título e abra uma obra."
    },
    {
      "id": "work",
      "title": "Detalhes da obra",
      "note": "Salve nos favoritos ou abra o player e o leitor."
    },
    {
      "id": "player",
      "title": "Player",
      "note": "Reproduza, pause, avance o tempo e alterne as legendas da amostra."
    },
    {
      "id": "reader",
      "title": "Leitor de mangá",
      "note": "Avance pelas quatro páginas ilustradas do capítulo."
    },
    {
      "id": "favorites",
      "title": "Favoritos",
      "note": "As obras salvas aparecem aqui durante a sessão."
    },
    {
      "id": "upload",
      "title": "Envio do criador",
      "note": "Preencha os créditos e simule o envio para moderação."
    },
    {
      "id": "moderation",
      "title": "Moderação",
      "note": "Revise o envio e aprove ou devolva a obra ao criador."
    }
  ]
};
