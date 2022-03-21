<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HookController extends AbstractController
{
    #[Route('/hook', name: 'hook')]
    public function index(): Response
    {
        return $this->render('hook/index.html.twig', [
            'controller_name' => 'HookController',
        ]);
    }
}
