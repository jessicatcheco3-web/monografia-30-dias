/**
 * UFUTURO Licenciado - Cliente API
 * Comunicação com o backend PHP
 */

// URL base da API - detecta automaticamente o ambiente
const API_BASE_URL = (() => {
  // Em produção no Hostinger
  if (window.location.hostname.includes('ufuturo') || 
      window.location.hostname.includes('hostinger')) {
    return '/api';
  }
  // Em localhost com XAMPP/MAMP
  if (window.location.hostname === 'localhost' && window.location.port !== '5173') {
    return '/api';
  }
  // Em ambiente de desenvolvimento (Lovable preview) - usa fallback
  return null;
})();

// Flag para modo de desenvolvimento sem backend
const IS_DEV_MODE = API_BASE_URL === null;

interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  user?: AuthUser;
  authenticated?: boolean;
}

export interface AuthUser {
  id: number;
  username: string;
  full_name: string;
}

interface ProgressData {
  completedLessons: string[];
}

/**
 * Faz uma requisição à API
 */
async function apiRequest<T>(
  endpoint: string, 
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  // Em modo dev sem backend, retorna erro amigável
  if (IS_DEV_MODE) {
    console.warn('API não disponível no preview. Deploy no Hostinger para testar autenticação.');
    return {
      success: false,
      message: 'API disponível apenas em produção. Faça deploy no Hostinger.',
    };
  }

  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      ...options,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro na API:', error);
    return {
      success: false,
      message: 'Erro de conexão. Verifique a sua ligação à internet.',
    };
  }
}

/**
 * Login do estudante
 */
export async function apiLogin(username: string, password: string): Promise<ApiResponse<AuthUser>> {
  return apiRequest('auth_login.php', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });
}

/**
 * Logout do estudante
 */
export async function apiLogout(): Promise<ApiResponse> {
  return apiRequest('auth_logout.php', {
    method: 'POST',
  });
}

/**
 * Verificar sessão actual
 */
export async function apiGetMe(): Promise<ApiResponse<AuthUser>> {
  return apiRequest('me.php', {
    method: 'GET',
  });
}

/**
 * Obter progresso do estudante
 */
export async function apiGetProgress(): Promise<ApiResponse<ProgressData>> {
  return apiRequest('progress_get.php', {
    method: 'GET',
  });
}

/**
 * Guardar progresso de uma aula
 */
export async function apiSaveProgress(
  moduleId: string, 
  lessonId: string, 
  completed: boolean
): Promise<ApiResponse> {
  return apiRequest('progress_upsert.php', {
    method: 'POST',
    body: JSON.stringify({
      module_id: moduleId,
      lesson_id: lessonId,
      completed,
    }),
  });
}

/**
 * Submeter avaliação do curso
 */
export async function apiSubmitReview(
  rating: number, 
  comment?: string
): Promise<ApiResponse> {
  return apiRequest('review_create.php', {
    method: 'POST',
    body: JSON.stringify({ rating, comment }),
  });
}
