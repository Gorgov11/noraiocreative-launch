// Smart AI Translation Service
export interface TranslationOptions {
  sourceLanguage?: string;
  targetLanguage: string;
  context?: string;
  tone?: 'formal' | 'casual' | 'technical';
  preserveFormatting?: boolean;
}

export interface TranslationResult {
  translatedText: string;
  confidence: number;
  detectedLanguage?: string;
  alternatives?: string[];
}

class SmartTranslationService {
  private cache = new Map<string, TranslationResult>();
  private apiKey: string;
  private baseUrl = 'https://api.openai.com/v1';

  constructor(apiKey?: string) {
    // Use Vite env in browser; avoid using Node's process.env
    // Priority: explicit arg -> Vite env -> window override -> empty
    const viteKey = (typeof import.meta !== 'undefined' && (import.meta as any).env)
      ? ((import.meta as any).env.VITE_OPENAI_API_KEY as string | undefined)
      : undefined;
    const windowKey = (typeof window !== 'undefined' && (window as any).__OPENAI_API_KEY__)
      ? ((window as any).__OPENAI_API_KEY__ as string | undefined)
      : undefined;
    this.apiKey = apiKey || viteKey || windowKey || '';
  }

  // Smart translation with AI context understanding
  async translateText(
    text: string, 
    options: TranslationOptions
  ): Promise<TranslationResult> {
    const cacheKey = `${text}-${options.targetLanguage}-${options.context || 'default'}`;
    
    // Check cache first
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }

    try {
      // Use AI for smart translation
      const result = await this.aiTranslate(text, options);
      
      // Cache the result
      this.cache.set(cacheKey, result);
      
      return result;
    } catch (error) {
      console.error('Translation error:', error);
      // Fallback to basic translation
      return this.fallbackTranslation(text, options);
    }
  }

  private async aiTranslate(
    text: string, 
    options: TranslationOptions
  ): Promise<TranslationResult> {
    if (!this.apiKey) {
      throw new Error('OpenAI API key not provided');
    }

    const prompt = this.buildTranslationPrompt(text, options);
    
    const response = await fetch(`${this.baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are an expert translator specializing in business and technology content. Provide accurate, contextually appropriate translations.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3,
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      throw new Error(`Translation API error: ${response.status}`);
    }

    const data = await response.json();
    const translatedText = data.choices[0]?.message?.content?.trim() || text;
    
    return {
      translatedText,
      confidence: 0.9,
      detectedLanguage: options.sourceLanguage,
      alternatives: []
    };
  }

  private buildTranslationPrompt(text: string, options: TranslationOptions): string {
    const { targetLanguage, context, tone } = options;
    
    let prompt = `Translate the following text to ${targetLanguage}:\n\n"${text}"\n\n`;
    
    if (context) {
      prompt += `Context: ${context}\n`;
    }
    
    if (tone) {
      prompt += `Tone: ${tone}\n`;
    }
    
    prompt += `\nRequirements:
    - Maintain the original meaning and intent
    - Use appropriate business/technology terminology
    - Preserve any HTML tags or formatting
    - Ensure cultural appropriateness
    - Return only the translated text`;
    
    return prompt;
  }

  private fallbackTranslation(text: string, options: TranslationOptions): TranslationResult {
    // Basic fallback translations for common phrases
    const fallbackTranslations: Record<string, Record<string, string>> = {
      'en': {
        'Solutions': 'Solutions',
        'Industries': 'Industries',
        'Products': 'Products',
        'Resources': 'Resources',
        'About us': 'About us',
        'Get started': 'Get started',
        'Sign In': 'Sign In'
      },
      'no': {
        'Solutions': 'Løsninger',
        'Industries': 'Bransjer',
        'Products': 'Produkter',
        'Resources': 'Ressurser',
        'About us': 'Om oss',
        'Get started': 'Kom i gang',
        'Sign In': 'Logg inn'
      },
      'sv': {
        'Solutions': 'Lösningar',
        'Industries': 'Branscher',
        'Products': 'Produkter',
        'Resources': 'Resurser',
        'About us': 'Om oss',
        'Get started': 'Kom igång',
        'Sign In': 'Logga in'
      },
      'da': {
        'Solutions': 'Løsninger',
        'Industries': 'Brancher',
        'Products': 'Produkter',
        'Resources': 'Ressourcer',
        'About us': 'Om os',
        'Get started': 'Kom i gang',
        'Sign In': 'Log ind'
      },
      'fi': {
        'Solutions': 'Ratkaisut',
        'Industries': 'Toimialat',
        'Products': 'Tuotteet',
        'Resources': 'Resurssit',
        'About us': 'Tietoa meistä',
        'Get started': 'Aloita',
        'Sign In': 'Kirjaudu sisään'
      },
      'ar': {
        'Solutions': 'الحلول',
        'Industries': 'الصناعات',
        'Products': 'المنتجات',
        'Resources': 'الموارد',
        'About us': 'من نحن',
        'Get started': 'ابدأ الآن',
        'Sign In': 'تسجيل الدخول'
      }
    };

    const translation = fallbackTranslations[options.targetLanguage]?.[text] || text;
    
    return {
      translatedText: translation,
      confidence: 0.7,
      detectedLanguage: 'en',
      alternatives: []
    };
  }

  // Batch translation for multiple texts
  async translateBatch(
    texts: string[], 
    options: TranslationOptions
  ): Promise<TranslationResult[]> {
    const promises = texts.map(text => this.translateText(text, options));
    return Promise.all(promises);
  }

  // Detect language of text
  async detectLanguage(text: string): Promise<string> {
    // Simple language detection based on character patterns
    if (/[\u0600-\u06FF]/.test(text)) return 'ar'; // Arabic
    if (/[åæøÅÆØ]/.test(text)) return 'no'; // Norwegian
    if (/[åäöÅÄÖ]/.test(text)) return 'sv'; // Swedish
    if (/[åæøÅÆØ]/.test(text)) return 'da'; // Danish
    if (/[äöåÄÖÅ]/.test(text)) return 'fi'; // Finnish
    return 'en'; // Default to English
  }

  // Clear cache
  clearCache(): void {
    this.cache.clear();
  }

  // Get cache statistics
  getCacheStats(): { size: number; keys: string[] } {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys())
    };
  }
}

export const translationService = new SmartTranslationService();
export default translationService;
