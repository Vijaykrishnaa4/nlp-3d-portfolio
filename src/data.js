export const portfolioData = {
  student: {
    name: "NLP Student Portfolio",
    course: "Natural Language Processing (NLP)",
    degree: "B.Tech / B.E. Computer Science & AI",
    faculty: "Prof. Sharmila Banu",
    status: "20-Mark Visual Recall Master • Star Bounty Survivor"
  },

  faculty: {
    name: "Prof. Sharmila Banu",
    title: "Faculty in Natural Language Processing & AI",
    badge: "The Visual NLP Master & Real-World Metaphorist ⭐️",
    quote: "If you answer daily class questions, you will get a star. Collect 10 stars and internal marks are in your pocket!",
    superpower: "Turns complex mathematical NLP theorems into vivid mental visuals that stick forever (saving 20 marks in exams without studying!)"
  },

  // 6 Classroom Memories with Sharmila Banu Mam
  chronicles: [
    {
      id: "day1-strict",
      tag: "Day 1 • The Intro",
      title: "Chapter 1: The 'Strict Mam' Psychological Scare 😨",
      preview: "She walked in, declared she was super strict, and my heart rate spiked...",
      content: `In the first few days, Sharmila Mam stepped into our classroom with an aura of total academic authority. She looked at the room and made it known: *'I am quite strict.'* 
      
Naturally, my immediate reaction was a quiet panic: *'Oh boy, this semester is going to be intense!'* I sat up straight, checked my notes three times, and tried not to make sudden eye contact.
      
**The Reality Check:** Beneath that strict demeanor was one of the most enthusiastic, dedicated, and engaging teachers we have ever met. Her discipline was just her secret weapon to make sure we actually understood the deeper intuition of NLP!`,
      vibe: "Initial panic ➡️ Pure respect",
      icon: "alert-circle"
    },
    {
      id: "teaching-style",
      tag: "Pedagogy • Knowledge",
      title: "Chapter 2: The Real-World Analogy Magic 🧠💡",
      preview: "New vocabulary, real-world examples, and knowledge expansion every single lecture...",
      content: `Mam’s teaching was distinct from any conventional lecture. Instead of just reading slides full of dry probabilistic formulas, she constantly connected abstract NLP concepts to everyday life scenarios.
      
Every single class introduced us to fresh industry terminology, new research horizons, and contextual analogies that made token embeddings, Markov assumptions, and attention mechanisms feel tangible rather than alien. You never left her class without learning at least three brand new concepts you could actually explain to a friend!`,
      vibe: "High Knowledge Yield",
      icon: "sparkles"
    },
    {
      id: "the-star-promise",
      tag: "The Legend • Gamification",
      title: "Chapter 3: The Mythical 10-Star Quest ⭐️🎯",
      preview: "Answer daily questions -> get a star -> 10 stars = 100% internal marks! Semester ended... Balance: 0 stars 😂",
      content: `During the opening week, Mam rolled out the ultimate gamification mechanism:
      
> *"If you answer my daily class questions, you will earn a Star. Collect 10 Stars, and you will get full marks in your internal assessments!"*
      
The class was instantly fired up! Everyone was ready to become a Star Millionaire. I had calculated my path to academic glory. 
      
**Plot Twist:** The semester ended... final star count: **0 stars**. Not a single golden star in sight! 😂 
It became our class's favorite running joke. But even with 0 stars, the internal understanding she instilled in us was worth more than any grade on paper!`,
      vibe: "Expectation: ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️ | Reality: 0 ⭐️ (Priceless memories)",
      icon: "star"
    },
    {
      id: "faculty-swap",
      tag: "Mid-Sem Plot Twist",
      title: "Chapter 4: The Great Faculty Shuffle (The Hiatus) 🔄😅",
      preview: "Mid-sem faculty change happened... felt low, but secretly a little relieved from spot-questions!",
      content: `Halfway through the semester, news dropped: our NLP faculty was being reassigned.
      
We genuinely felt low—we had grown fond of Mam's rhythm and examples. But let’s be completely transparent here: there was also a tiny sigh of humorous relief: *'Phew, at least I won’t get called out on the spot today!'* 😂
      
The classroom atmosphere just felt quieter, and something vital was missing from our daily NLP dose.`,
      vibe: "Bittersweet relief mixed with genuine withdrawal",
      icon: "refresh-cw"
    },
    {
      id: "the-return",
      tag: "The Comeback",
      title: "Chapter 5: Return of the NLP Legend 👑🚀",
      preview: "The classroom door opened... Mam was officially back as our NLP faculty!",
      content: `Just when we thought the course trajectory was locked in... Mam walked back through the door as our official NLP faculty!
      
The collective sigh of relief and excitement in the room was palpable. The energy returned, the rigorous explanations resumed, and our NLP journey was firmly back on track under the rightful captain!`,
      vibe: "The Prodigal Professor Returns",
      icon: "zap"
    },
    {
      id: "visual-superpower",
      tag: "The Superpower • Exam Clutch",
      title: "Chapter 6: The Mind Drift vs The 20-Mark Visual Miracle 🎨🏆",
      preview: "I drifted off sometimes... but her visual metaphors were so strong I scored 20 marks without studying!",
      content: `A raw, personal confession: Mam explained every single concept in deep, thorough detail. But every now and then, human attention span failed me—I’d get distracted for a moment and couldn’t catch back up with the train of thought.
      
**AND YET, HER TEACHING HAD A SUPERPOWER:**
Even when I missed listening or didn't fully absorb the lecture live, the visual mental models, diagrams, and physical analogies she painted on the board etched themselves directly into my subconscious.
      
**The Exam Clutch:**
During the semester exam, a heavy 20-mark question appeared on a topic I had **seriously not opened a book for or studied the night before**. I closed my eyes, recalled Sharmila Mam standing at the board explaining the visual concept, and reconstructed the entire answer purely from her classroom visual! 
      
Scored roughly 20 marks clean from that memory alone. That is what you call legendary pedagogical imprinting!`,
      vibe: "Visual Memory Clutch = 20 Marks Pure Profit",
      icon: "award"
    }
  ],

  // Academic Course Units (Full 5-Unit Curriculum)
  units: [
    {
      number: "Unit 1",
      title: "Foundations of NLP, Morphology & Tokenization",
      topics: [
        "Natural Language Processing pipeline and ambiguity challenges (Syntactic, Semantic, Pragmatic)",
        "Regular Expressions, Finite State Automata (FSA) for morphological parsing",
        "Tokenization strategies: Word Tokenization, Sentence Splitting, Byte-Pair Encoding (BPE), WordPiece",
        "Morphological analysis: Inflectional vs. Derivational morphology, Stemming (Porter/Snowball) vs. Lemmatization (WordNet)",
        "Minimum Edit Distance (Levenshtein Distance) and Dynamic Programming alignment"
      ],
      math: "\\text{Levenshtein}(i, j) = \\min \\begin{cases} D(i-1, j) + 1 \\\\ D(i, j-1) + 1 \\\\ D(i-1, j-1) + \\text{cost}(s_i, t_j) \\end{cases}",
      mamAnalogy: "Like chopping sentences into clean LEGO blocks before assembling a digital building!",
      labCode: `# Byte-Pair Encoding Subword Tokenizer Simulation
import collections

def get_stats(vocab):
    pairs = collections.defaultdict(int)
    for word, freq in vocab.items():
        symbols = word.split()
        for i in range(len(symbols)-1):
            pairs[symbols[i], symbols[i+1]] += freq
    return pairs

vocab = {'n e w </w>': 5, 'n e w e s t </w>': 6, 'w i d e s t </w>': 3}
pairs = get_stats(vocab)
print("Most frequent subword pair:", max(pairs, key=pairs.get))`
    },
    {
      number: "Unit 2",
      title: "Language Models, Smoothing & POS Tagging",
      topics: [
        "Probabilistic N-gram models & Joint probability estimation via the Chain Rule",
        "Markovian Assumption: Unigram, Bigram, and Trigram language models",
        "Sparsity mitigation: Add-1 (Laplace), Lidstone, Good-Turing, and Kneser-Ney Smoothing",
        "Model Evaluation: Intrinsic evaluation via Cross-Entropy and Perplexity ($PP$)",
        "Part-of-Speech (POS) Tagging with Hidden Markov Models (HMM) and Viterbi Decoding algorithm"
      ],
      math: "P(w_1, \\dots, w_n) = \\prod_{i=1}^n P(w_i \\mid w_{i-1}), \\quad \\text{Perplexity}(W) = P(w_1, \\dots, w_N)^{-1/N}",
      mamAnalogy: "Like predicting a friend's next habit based strictly on their last two actions!",
      labCode: `# Bigram Language Model with Laplace (Add-1) Smoothing
def bigram_prob_smoothed(w_prev, w_curr, bigram_counts, unigram_counts, vocab_size):
    count_bi = bigram_counts.get((w_prev, w_curr), 0)
    count_uni = unigram_counts.get(w_prev, 0)
    return (count_bi + 1) / (count_uni + vocab_size)

print("Smoothed Prob P('language' | 'natural'):", 
      bigram_prob_smoothed('natural', 'language', {('natural', 'language'): 14}, {'natural': 20}, 5000))`
    },
    {
      number: "Unit 3",
      title: "Vector Semantics & Distributed Embeddings",
      topics: [
        "From Discrete to Dense: One-Hot Encoding limitations, Bag-of-Words, and TF-IDF weighting",
        "Distributional Hypothesis: 'You shall know a word by the company it keeps' (Firth)",
        "Word2Vec: Continuous Bag-of-Words (CBOW) vs. Continuous Skip-Gram architectures",
        "Efficient training: Hierarchical Softmax and Negative Sampling (NEG)",
        "GloVe (Global Vectors) matrix factorization and FastText subword n-gram embeddings",
        "Vector space arithmetic: King - Man + Woman ~ Queen and Cosine Similarity"
      ],
      math: "\\mathcal{L}_{\\text{SkipGram}} = \\sum_{t=1}^T \\sum_{-c \\le j \\le c, j \\ne 0} \\log \\sigma(v'_{w_{t+j}}^\\top v_{w_t}) + \\sum_{k=1}^K \\mathbb{E}_{w_{n,k} \\sim P_n} [\\log \\sigma(-v'_{w_{n,k}}^\\top v_{w_t})]",
      mamAnalogy: "Giving every single English word precise GPS coordinates in a 300-dimensional mental universe!",
      labCode: `# Vector Semantics: Cosine Similarity and Analogy
import numpy as np

def cosine_similarity(v1, v2):
    return np.dot(v1, v2) / (np.linalg.norm(v1) * np.linalg.norm(v2))

king = np.array([0.9, 0.2, 0.7])
man = np.array([0.8, 0.1, 0.1])
woman = np.array([0.1, 0.9, 0.1])
queen = np.array([0.2, 0.9, 0.7])

predicted_queen = king - man + woman
print("Cosine Similarity with Queen:", cosine_similarity(predicted_queen, queen))`
    },
    {
      number: "Unit 4",
      title: "Sequence Modeling: RNN, LSTM & Seq2Seq",
      topics: [
        "Feedforward limitations on arbitrary sequence lengths & Backpropagation Through Time (BPTT)",
        "Vanilla Recurrent Neural Networks (RNN) and the Exploding/Vanishing Gradient problem",
        "Long Short-Term Memory (LSTM) cells: Cell state memory highway, Forget gate ($f_t$), Input gate ($i_t$), Output gate ($o_t$)",
        "Gated Recurrent Units (GRU): Reset ($r_t$) and Update ($z_t$) gates",
        "Sequence-to-Sequence (Seq2Seq) Encoder-Decoder architectures for Neural Machine Translation",
        "The Attention Mechanism: Bahdanau (Additive) and Luong (Multiplicative) alignment"
      ],
      math: "f_t = \\sigma(W_f [h_{t-1}, x_t] + b_f), \\quad C_t = f_t \\odot C_{t-1} + i_t \\odot \\tilde{C}_t, \\quad h_t = o_t \\odot \\tanh(C_t)",
      mamAnalogy: "A conveyor belt of memories with strict security guards (gates) deciding what to discard and what to store!",
      labCode: `# PyTorch LSTM Sequence Classifier Definition
import torch
import torch.nn as nn

class LSTMTextClassifier(nn.Module):
    def __init__(self, vocab_size, emb_dim, hidden_dim, num_classes):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, emb_dim)
        self.lstm = nn.LSTM(emb_dim, hidden_dim, batch_first=True, bidirectional=True)
        self.fc = nn.Linear(hidden_dim * 2, num_classes)
        
    def forward(self, x):
        embedded = self.embedding(x)
        output, (hn, cn) = self.lstm(embedded)
        # Concatenate forward and backward final hidden states
        hidden = torch.cat((hn[-2,:,:], hn[-1,:,:]), dim=1)
        return self.fc(hidden)`
    },
    {
      number: "Unit 5",
      title: "The Transformer Revolution, BERT & Modern LLMs",
      topics: [
        "'Attention Is All You Need' (Vaswani et al.): Eliminating recurrence with Self-Attention",
        "Scaled Dot-Product Attention: Query ($Q$), Key ($K$), Value ($V$) matrices and scaling factor $\\sqrt{d_k}$",
        "Multi-Head Attention (MHA), Sinusoidal & Rotary Positional Encodings (RoPE)",
        "Transformer Encoders vs. Decoders: BERT (Masked LM + NSP) vs. GPT (Autoregressive Causal LM)",
        "Parameter-Efficient Fine-Tuning (PEFT): Low-Rank Adaptation (LoRA), QLoRA, and Instruction Tuning",
        "Retrieval-Augmented Generation (RAG) and Hallucination mitigation in enterprise systems"
      ],
      math: "\\text{Attention}(Q, K, V) = \\text{softmax}\\left(\\frac{QK^\\top}{\\sqrt{d_k}}\\right) V",
      mamAnalogy: "A super-fast laser highlighter pen reading all words in a document at the exact same millisecond!",
      labCode: `# Scaled Dot-Product Self-Attention
import torch
import torch.nn.functional as F

def scaled_dot_product_attention(q, k, v, mask=None):
    d_k = q.size(-1)
    scores = torch.matmul(q, k.transpose(-2, -1)) / (d_k ** 0.5)
    if mask is not None:
        scores = scores.masked_fill(mask == 0, -1e9)
    weights = F.softmax(scores, dim=-1)
    return torch.matmul(weights, v), weights

# Simulated batch of shape (batch=1, heads=1, tokens=3, dim=4)
q = torch.randn(1, 1, 3, 4)
k = torch.randn(1, 1, 3, 4)
v = torch.randn(1, 1, 3, 4)
output, weights = scaled_dot_product_attention(q, k, v)
print("Attention weights shape:", weights.shape)`
    }
  ],

  // Hands-on Lab Experiments
  labs: [
    {
      id: "lab-1",
      title: "Lab 1: Text Normalization & Subword Tokenizer",
      tools: "Python, Regex, NLTK, spaCy",
      description: "Implemented custom regex tokenizers, punctuation clean-up, stopword stripping, and trained a Byte-Pair Encoding subword vocabulary on raw text corpora.",
      result: "Vocabulary size reduced from 45,000 to 12,000 subword units with 0% Out-Of-Vocabulary (OOV) tokens."
    },
    {
      id: "lab-2",
      title: "Lab 2: N-gram Language Modeling & Perplexity Evaluation",
      tools: "Python, Pandas, Math",
      description: "Built Unigram, Bigram, and Trigram language models from scratch with Laplace and Kneser-Ney smoothing. Evaluated sentence perplexity across test corpora.",
      result: "Kneser-Ney smoothing reduced perplexity from 182.4 down to 54.2 on the Brown Corpus."
    },
    {
      id: "lab-3",
      title: "Lab 3: Word2Vec Embeddings & Semantic Geometry",
      tools: "Gensim, PyTorch, Scikit-Learn",
      description: "Trained Continuous Skip-gram with Negative Sampling on Wikipedia text. Projected 300D word vectors into 2D and 3D using t-SNE and PCA.",
      result: "Reproduced semantic analogies (King - Man + Woman ~ Queen) with 91.4% top-5 accuracy."
    },
    {
      id: "lab-4",
      title: "Lab 4: Bidirectional LSTM for Sentiment Classification",
      tools: "PyTorch, CUDA, TorchText",
      description: "Designed a BiLSTM neural classifier with embedding dropout and AdamW optimization on the IMDB Movie Review dataset.",
      result: "Achieved 89.8% Test Accuracy, overcoming long-range dependency decay."
    },
    {
      id: "lab-5",
      title: "Lab 5: Fine-tuning BERT for Named Entity Recognition (NER)",
      tools: "HuggingFace Transformers, PyTorch, Seqeval",
      description: "Fine-tuned `bert-base-uncased` with token classification head for BIO tagged entity extraction (PERSON, ORG, LOC, MISC) on CoNLL-2003.",
      result: "Achieved 92.4% Entity F1-Score with subword alignment masking."
    }
  ],

  // Capstone Projects
  projects: [
    {
      id: "proj-1",
      title: "NeuroLex: 3D Semantic Search & RAG Assistant",
      tag: "Flagship NLP System",
      tech: ["PyTorch", "HuggingFace", "FAISS", "Three.js", "FastAPI"],
      summary: "An intelligent question-answering system combining Dense Retrieval with cross-attention re-ranking and an interactive 3D vector embedding cluster visualizer.",
      metrics: "94.2% Hit@5 Accuracy • 42ms Retrieval Latency",
      highlights: [
        "Bilingual document indexing using Sentence-BERT embeddings",
        "Real-time 3D dimensionality reduction (UMAP projection to 3D sphere)",
        "Hallucination detector with source citation attribution"
      ]
    },
    {
      id: "proj-2",
      title: "Sentix: Aspect-Based Sentiment Radar",
      tag: "Deep Learning",
      tech: ["RoBERTa", "spaCy", "Transformers", "Streamlit"],
      summary: "Fine-grained sentiment classification that extracts entities and opinions simultaneously, inspired by Sharmila Mam's real-world product review case studies.",
      metrics: "91.8% Macro F1 Score across 12 product domains",
      highlights: [
        "Dependency-tree parsing for modifier-entity pairing",
        "Attention head weight visualizer showing exact word attribution",
        "Exportable sentiment heatmaps for business analytics"
      ]
    },
    {
      id: "proj-3",
      title: "BioNER: Clinical Named Entity Extraction",
      tag: "Sequence Tagging",
      tech: ["BiLSTM-CRF", "SciBERT", "Flask", "Docker"],
      summary: "Sequence labeling model trained on biomedical corpora to automatically detect diseases, chemicals, and dosage specifications.",
      metrics: "88.6% Entity Recognition F1 Score",
      highlights: [
        "Custom character-level CNN embeddings fused with subword representations",
        "Viterbi decoding for globally optimal tag transitions",
        "De-identification pipeline for patient data protection"
      ]
    }
  ],

  // Interactive Quiz
  quiz: [
    {
      question: "In Word2Vec, what is the core architectural difference between CBOW and Skip-gram?",
      options: [
        "CBOW predicts the target word from context words; Skip-gram predicts context words from a target word",
        "CBOW uses RNNs while Skip-gram uses Transformers",
        "CBOW only works for English, Skip-gram works for all languages",
        "Skip-gram is only used for tokenization"
      ],
      correctIndex: 0,
      explanation: "Exactly! Continuous Bag-of-Words aggregates context to guess the target word, while Skip-Gram casts a prediction net over surrounding neighbors!"
    },
    {
      question: "Which component inside an LSTM cell determines what past information from the cell state should be discarded?",
      options: [
        "Forget Gate (f_t)",
        "Output Gate (o_t)",
        "Input Gate (i_t)",
        "Candidate Hidden State"
      ],
      correctIndex: 0,
      explanation: "Correct! The Forget Gate computes a sigmoid between 0 and 1: 0 means completely discard, 1 means retain."
    },
    {
      question: "Why do we scale the dot-product in Self-Attention by dividing by sqrt(d_k)?",
      options: [
        "To prevent large dot products from pushing the softmax into regions with tiny gradients",
        "To convert words into 3D vectors",
        "Because Sharmila Mam likes the number 10",
        "To remove punctuation marks"
      ],
      correctIndex: 0,
      explanation: "Spot on! For large vector dimensions, dot products grow large, pushing softmax into saturated areas with near-zero gradients. The square root stabilizes gradient flow!"
    },
    {
      question: "What was the legendary internal exam rule Sharmila Mam gave us in class?",
      options: [
        "Collect 10 stars from answering daily questions for full internal marks!",
        "Memorize the entire dictionary by heart",
        "Write 500 pages of code in C language",
        "Bring a box of chocolates every Monday"
      ],
      correctIndex: 0,
      explanation: "The Legendary 10-Star Quest! Even though we reached the end of semester with 0 stars, the excitement and conceptual clarity was 10/10!"
    }
  ]
};
