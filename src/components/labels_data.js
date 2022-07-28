/* Explanation:
 *
 *  type 1: each picture should strictly have =1 label under this category.
 *  type 2: accepts a list of labels, any number from 0 to all possible.
 */

export const labels_data = [
  {
    category: "Location",
    color: "#A0D568",
    subcategories: [
      {
        subcategory: "In/outdoor",
        description: "In/outdoor",
        type: 1,
        labels: [
          { label: "indoor", label_id: 0, pictures: ["id_1", "id_2", "id_3"] },
          { label: "outdoor", label_id: 1, pictures: [] },
        ],
      },
      {
        subcategory: "Purpose of the place",
        description:
          "e.g. subway, gym, swimming pool, beach, hospital, parking lot",
        type: 2,
        labels: [
          { label: "library", label_id: 0, pictures: [] },
          { label: "hospital", label_id: 1, pictures: [] },
          { label: "store", label_id: 2, pictures: [] },
          { label: "public transportation", label_id: 3, pictures: [] },
        ],
      },
      {
        subcategory: "Architecture component",
        description:
          "e.g. at the entrance, in the corridor, in the waiting room, inside the pool",
        type: 2,
        labels: [
          { label: "entrance", label_id: 0, pictures: [] },
          { label: "corridor", label_id: 1, pictures: [] },
          { label: "bench", label_id: 2, pictures: [] },
          { label: "cabin", label_id: 3, pictures: [] },
        ],
      },
    ],
  },
  {
    category: "Spectators",
    color: "#FFCE54",
    subcategories: [
      {
        subcategory: "Quantity",
        description:
          "number of people appearing in the photo minus the observed subject",
        type: 1,
        labels: [
          { label: "none", label_id: 0, pictures: ["id_1", "id_2", "id_3"] },
          { label: "small", label_id: 1, pictures: [] },
          { label: "large", label_id: 2, pictures: [] },
        ],
      },
      {
        subcategory: "Density",
        description: "",
        type: 1,
        labels: [
          { label: "none", label_id: 0, pictures: [] },
          { label: "sparse", label_id: 1, pictures: [] },
          { label: "dense", label_id: 2, pictures: [] },
        ],
      },
      {
        subcategory: "Attentive",
        description: "input a number, or “many” if N > 8",
        type: 1,
        labels: [
          { label: "0", label_id: 0, pictures: [] },
          { label: "1", label_id: 1, pictures: [] },
          { label: "2", label_id: 2, pictures: [] },
          { label: "3", label_id: 3, pictures: [] },
          { label: "4", label_id: 4, pictures: [] },
          { label: "5", label_id: 5, pictures: [] },
          { label: "6", label_id: 6, pictures: [] },
          { label: "7", label_id: 7, pictures: [] },
          { label: "8", label_id: 8, pictures: [] },
          { label: "many", label_id: 9, pictures: [] },
        ],
      },
    ],
  },
  {
    category: "Modality",
    color: "#4FC1E8",
    subcategories: [
      {
        subcategory: "Head",
        type: 1,
        labels: [
          {
            label: "available",
            label_id: 0,
            pictures: ["id_1", "id_2", "id_3"],
          },
          { label: "unavailable", label_id: 1, pictures: [] },
        ],
      },
      {
        subcategory: "Eyes",
        type: 1,
        labels: [
          { label: "available", label_id: 0, pictures: [] },
          { label: "unavailable", label_id: 1, pictures: [] },
        ],
      },
      {
        subcategory: "Voice",
        type: 1,
        labels: [
          { label: "available", label_id: 0, pictures: [] },
          { label: "unavailable", label_id: 1, pictures: [] },
        ],
      },
      {
        subcategory: "Facial expression",
        type: 1,
        labels: [
          { label: "available", label_id: 0, pictures: [] },
          { label: "unavailable", label_id: 1, pictures: [] },
        ],
      },
      {
        subcategory: "R arm",
        type: 1,
        labels: [
          { label: "available", label_id: 0, pictures: [] },
          { label: "unavailable", label_id: 1, pictures: [] },
        ],
      },
      {
        subcategory: "L arm",
        type: 1,
        labels: [
          { label: "available", label_id: 0, pictures: [] },
          { label: "unavailable", label_id: 1, pictures: [] },
        ],
      },
      {
        subcategory: "R hand",
        type: 1,
        labels: [
          { label: "available", label_id: 0, pictures: [] },
          { label: "unavailable", label_id: 1, pictures: [] },
        ],
      },
      {
        subcategory: "L hand",
        type: 1,
        labels: [
          { label: "available", label_id: 0, pictures: [] },
          { label: "unavailable", label_id: 1, pictures: [] },
        ],
      },
      {
        subcategory: "Legs",
        type: 1,
        labels: [
          { label: "available", label_id: 0, pictures: [] },
          { label: "unavailable", label_id: 1, pictures: [] },
        ],
      },
      {
        subcategory: "Feet",
        type: 1,
        labels: [
          { label: "available", label_id: 0, pictures: [] },
          { label: "unavailable", label_id: 1, pictures: [] },
        ],
      },
    ],
  },
  {
    category: "Demographic",
    color: "#ED5564",
    subcategories: [
      {
        subcategory: "Age",
        type: 1,
        labels: [
          { label: "baby", label_id: 0, pictures: ["id_1", "id_2", "id_3"] },
          { label: "child", label_id: 1, pictures: [] },
          { label: "teen", label_id: 2, pictures: [] },
          { label: "young adult", label_id: 3, pictures: [] },
          { label: "adult", label_id: 4, pictures: [] },
          { label: "senior", label_id: 5, pictures: [] },
        ],
      },
      {
        subcategory: "Biological sex",
        type: 1,
        labels: [
          { label: "female", label_id: 0, pictures: [] },
          { label: "male", label_id: 1, pictures: [] },
        ],
      },
      {
        subcategory: "Social role",
        description:
          "e.g. staff, coach, cleaner, customer, passenger, patient, caregiver",
        type: 2,
        labels: [
          { label: "staff", label_id: 0, pictures: [] },
          { label: "coach", label_id: 1, pictures: [] },
          { label: "parent", label_id: 2, pictures: [] },
          { label: "student", label_id: 3, pictures: [] },
        ],
      },
    ],
  },
  {
    category: "Posture",
    description: "choose from list",
    color: "#AC92EB",
    subcategories: [
      {
        subcategory: "",
        type: 2,
        labels: [
          { label: "sitting", label_id: 0, pictures: ["id_1", "id_2", "id_3"] },
          { label: "standing", label_id: 1, pictures: [] },
          { label: "walking", label_id: 2, pictures: [] },
          { label: "running", label_id: 3, pictures: [] },
          { label: "jumping", label_id: 4, pictures: [] },
          { label: "bending", label_id: 5, pictures: [] },
          { label: "squatting", label_id: 6, pictures: [] },
          { label: "kneeling", label_id: 7, pictures: [] },
          { label: "climbing", label_id: 8, pictures: [] },
          { label: "hanging", label_id: 9, pictures: [] },
          { label: "lying", label_id: 10, pictures: [] },
          { label: "backbending", label_id: 11, pictures: [] },
          {
            label: "holding sth.",
            label_id: 12,
            pictures: ["id_1", "id_2", "id_3"],
          },
          { label: "grasping sth.", label_id: 13, pictures: [] },
          { label: "operating sth.", label_id: 14, pictures: [] },
          { label: "pulling sth.", label_id: 15, pictures: [] },
          { label: "pushing sth.", label_id: 16, pictures: [] },
          { label: "reaching for sth.", label_id: 17, pictures: [] },
          { label: "pointing at sth.", label_id: 18, pictures: [] },
          { label: "crossing arms", label_id: 19, pictures: [] },
          { label: "raising arm(s)", label_id: 20, pictures: [] },
          { label: "crossing legs", label_id: 21, pictures: [] },
          { label: "raising leg(s)", label_id: 22, pictures: [] },
        ],
      },
    ],
  },
];
