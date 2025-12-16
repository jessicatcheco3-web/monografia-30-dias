/**
 * UFUTURO Licenciado - Cliente API
 * Comunicação com o backend PHP
 */

// URL base da API (alterar para produção)
const API_BASE_URL = import.meta.env.PROD 
  ? '/api' 
  : 'http://localhost/api';

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
