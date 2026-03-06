import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  getDocs, 
  addDoc, 
  query, 
  orderBy,
  deleteDoc,
  doc 
} from "firebase/firestore";
import { Snippet } from "../types";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7HTMY0EsktRFuEymrBJob_XKzaSh5EK0",
  authDomain: "drawer-integration.firebaseapp.com",
  projectId: "drawer-integration",
  storageBucket: "drawer-integration.appspot.com",  // ✅ FIXED
  messagingSenderId: "882803140404",
  appId: "1:882803140404:web:3eef58d2e8fbeba1aca761"
};
export const deleteSnippetById = async (id: string) => {
  if (!db) return;
  await deleteDoc(doc(db, "snippets", id));
};
// Check if Firebase config is valid
const isConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);

let db: any = null;

if (isConfigured) {
  try {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
  } catch (error) {
    console.error("Firebase initialization error:", error);
  }
}

/** Fetch all snippets from Firestore */
export const fetchSnippets = async (): Promise<Snippet[]> => {
  if (!isConfigured || !db) return [];

  try {
    const q = query(collection(db, "snippets"), orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc: any) => ({
      id: doc.id,
      ...doc.data()
    })) as Snippet[];
  } catch (error) {
    console.error("Error fetching snippets:", error);
    return [];
  }
};

/** Add a new snippet to Firestore */
export const addSnippetToFirebase = async (
  snippet: Omit<Snippet, "id">
): Promise<string | null> => {
  if (!isConfigured || !db) {
    console.warn("Firebase not configured. Data will only be saved locally.");
    return null;
  }

  try {
    const docRef = await addDoc(collection(db, "snippets"), snippet);
    return docRef.id;
  } catch (error) {
    console.error("Error adding snippet:", error);
    throw error;
  }
};
